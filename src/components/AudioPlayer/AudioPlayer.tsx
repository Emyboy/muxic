'use client'
import React, { useEffect, useRef, useState } from 'react'
import { FaStepBackward, FaStepForward } from 'react-icons/fa'
import { HiMiniPlayCircle, HiOutlineHeart, HiPause, HiPauseCircle } from 'react-icons/hi2'
import { ShadToast } from '../ui/tooltip'
import AudioPlayerQueue from './AudioPlayerQueue'
import useAudioPlayer from '@/hooks/userAudioPlayer'
import Image from 'next/image'
import { TrackDataTable } from '../TrackDataTable/TrackDataTable'
import classNames from 'classnames'

type Props = {}

export default function AudioPlayer({ }: Props) {
    const { playerState, nextTrack, previousTrack, play, setPlayerState } = useAudioPlayer();
    const audioRef = useRef<HTMLAudioElement>(null);
    const [progress, setProgress] = useState(0);
    const { queue, queueIndex, isPlaying } = playerState;

    const activeTrack: TrackDataTable | null = queue[queueIndex];
    const isPlayingLastTrack: boolean = activeTrack?.id === queue[queue.length - 1]?.id;

    useEffect(() => {
        const audioElement = audioRef.current;

        const handleTimeUpdate = () => {
            if (audioElement) {
                const percentage = (audioElement.currentTime / audioElement.duration) * 100;
                if (Math.floor(percentage) === 100) {
                    nextTrack()
                    audioElement.pause()
                } else {
                    setProgress(percentage);
                }
            }
        };

        audioElement?.addEventListener('timeupdate', handleTimeUpdate);
        return () => {
            audioElement?.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, [isPlaying,]);

    useEffect(() => {
        const audioElement = audioRef.current;

        if (audioElement && activeTrack) {
            audioElement.pause();
            isPlaying && audioElement.play();
        }
    }, [queueIndex, activeTrack, isPlaying])

    useEffect(() => {
        const audioElement = audioRef.current;
        if (activeTrack && audioElement) {
            console.log('LOADING NEXT TRACK')
            audioElement.pause();
            setProgress(0)
            audioElement.load();
            isPlaying && audioElement.play();
        }
    }, [queueIndex, activeTrack])

    useEffect(() => {
        const audioElement = audioRef.current;
        if (isPlayingLastTrack && audioElement) {
            const percentage = (audioElement.currentTime / audioElement.duration) * 100;
            console.log('PLAYING LAST TRACK', Math.floor(percentage))
            if (Math.floor(percentage) === 99) {
                console.log('LAST TRACK DONE')
                setPlayerState({
                    isPlaying: false,
                    queue: []
                })
                setProgress(0)
            }
        }
    }, [isPlayingLastTrack, progress])

    return (
        <>
            {
                activeTrack && <audio ref={audioRef} className='z-50 top-9 left-32 fixed'>
                    <source src={activeTrack.preview} type="audio/mpeg" />
                </audio>
            }
            <div
                className='fixed h-[80px] bg-black border-t border-gray-800 text-fg-light z-50 bottom-0 left-0 ml-[300px] px-5 flex right-0 justify-between gap-5'
            >
                <div className="h-full flex items-center gap-5">
                    <div className={`relative h-[60px] w-[60px] rounded-md bg-fg overflow-hidden`}>
                        <Image src={activeTrack?.album?.cover_small || '/assets/img/no-image.png'} alt='track' fill className='absolute' />
                    </div>
                    <div className="h-full flex flex-col justify-center max-w-[150px] lg:min-w-[150px]">
                        <h5 className='text-white truncate'>{activeTrack?.title || "- - - - - - -"}</h5>
                        <small>{activeTrack?.artist?.name || '- - - -'}</small>
                    </div>
                    <div className='h-full flex flex-col justify-center hover:text-theme cursor-pointer'>
                        <HiOutlineHeart size={20} />
                    </div>
                </div>

                <div className='h-full flex items-center px-3 flex-1 flex-col justify-center'>
                    <div className="flex w-full justify-center items-center gap-5">
                        <button
                            disabled={queueIndex === 0}
                            className={classNames(`hover:text-white`, {
                                "opacity-40 cursor-not-allowed": queueIndex === 0,
                                "opacity-100": queueIndex > 0,
                            })}
                            onClick={previousTrack}
                        >
                            <ShadToast label='Previous Track'>
                                <FaStepBackward size={20} />
                            </ShadToast>
                        </button>
                        <button disabled={!activeTrack} className={classNames(`hover:text-white`, {
                            "opacity-40 cursor-not-allowed": !activeTrack,
                            "opacity-100": activeTrack,
                        })}
                            onClick={play} >
                            <ShadToast label='Play'>
                                {
                                    isPlaying ?
                                        <HiPauseCircle size={40} className='text-white' /> :
                                        <HiMiniPlayCircle size={40} className='text-white' />
                                }
                            </ShadToast>
                        </button>
                        <button
                            disabled={queueIndex === queue.length - 1}
                            className={classNames(`hover:text-white`, {
                                "opacity-40 cursor-not-allowed": queueIndex === queue.length - 1,
                                "opacity-100": queueIndex < queue.length - 1,
                            })} onClick={nextTrack}>
                            <ShadToast label='Next Track'>
                                <FaStepForward size={20} />
                            </ShadToast>
                        </button>
                    </div>
                    <div className='flex  items-center justify-center w-[70%] gap-5'>
                        <small>0:06</small>
                        <div className='flex-1 rounded-full min-w-[80%] h-1 bg-fg overflow-hidden'>
                            <div className='bg-fg-light h-1' style={{ width: `${progress}%` }} />
                        </div>
                        <small>2:25</small>
                    </div>
                </div>

                <AudioPlayerQueue />
            </div>
        </>
    )
}