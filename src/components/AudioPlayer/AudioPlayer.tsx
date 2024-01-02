'use client'
import React from 'react'
import { FaStepBackward, FaStepForward } from 'react-icons/fa'
import { HiMiniPlayCircle, HiOutlineHeart } from 'react-icons/hi2'
import { ShadToast } from '../ui/tooltip'
import AudioPlayerQueue from './AudioPlayerQueue'
import useAudioPlayer from '@/hooks/userAudioPlayer'
import Image from 'next/image'
import { TrackDataTable } from '../TrackDataTable/TrackDataTable'
import classNames from 'classnames'

type Props = {}

export default function AudioPlayer({ }: Props) {
    const { playerState } = useAudioPlayer();

    const { queue, queueIndex } = playerState;

    const activeTrack: TrackDataTable | null = queue[queueIndex];

    return (
        <div
            className='fixed h-[80px] bg-black border-t border-gray-800 text-fg-light z-50 bottom-0 left-0 ml-[300px] px-5 flex right-0 justify-between gap-5'
        >
            <div className="h-full flex items-center gap-5">
                <div className={`relative h-[60px] w-[60px] rounded-md bg-fg overflow-hidden`}>
                    <Image src={activeTrack?.album?.cover_big || '/assets/img/no-image.png'} alt='track' fill className='absolute' />
                </div>
                <div className="h-full flex flex-col justify-center max-w-[150px] min-w-[150px]">
                    <h5 className='text-white truncate'>{activeTrack?.title || "- - - - - - -"}</h5>
                    <small>{activeTrack?.artist?.name || '- - - -'}</small>
                </div>
                <div className='h-full flex flex-col justify-center hover:text-theme cursor-pointer'>
                    <HiOutlineHeart size={20} />
                </div>
            </div>

            <div className='h-full flex items-center px-3 flex-1 flex-col justify-center'>
                <div className="flex w-full justify-center items-center gap-5">
                    <button disabled={queueIndex === 0} className={classNames(`hover:text-white`, {
                        "opacity-40": queueIndex === 0,
                        "opacity-100": queueIndex > 0,
                    })}>
                        <ShadToast label='Previous Track'>
                            <FaStepBackward size={20} />
                        </ShadToast>
                    </button>
                    <button className='hover:text-white'>
                        <ShadToast label='Play'>
                            <HiMiniPlayCircle size={40} className='text-white' />
                        </ShadToast>
                    </button>
                    <button className='hover:text-white'>
                        <ShadToast label='Next Track'>
                            <FaStepForward size={20} />
                        </ShadToast>
                    </button>
                </div>
                <div className='flex  items-center w-[70%] gap-5'>
                    <small>0:06</small>
                    <div className='flex-1 rounded-full min-w-[80%] h-1 bg-fg overflow-hidden'>
                        <div className='bg-fg-light w-[40%] h-1' />
                    </div>
                    <small>2:25</small>
                </div>
            </div>

            <AudioPlayerQueue />
        </div>
    )
}