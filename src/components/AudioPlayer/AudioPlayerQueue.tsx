'use client'
import useAudioPlayer from '@/hooks/userAudioPlayer'
import { TrackData } from '@/types/track.types'
import classNames from 'classnames'
import Image from 'next/image'
import React, { useState } from 'react'
import { HiInbox, HiMiniTrash, HiOutlineQueueList, HiOutlineSpeakerWave, HiOutlineXMark } from 'react-icons/hi2'
import { TrackDataTable } from '../TrackDataTable/TrackDataTable'

type Props = {}

export default function AudioPlayerQueue({ }: Props) {
    const [showQueue, setShowQueue] = useState(false);
    return (
        <>
            <QueuePopup show={showQueue} onClose={() => setShowQueue(false)} />
            <div className='h-full flex items-center gap-5 p-3 min-w-[200px]'>
                <button className='hover:text-white' onClick={() => setShowQueue(true)}>
                    <HiOutlineQueueList size={20} />
                </button>
                <div className="flex h-full items-center flex-1 gap-3">
                    <button className='hover:text-white'>
                        <HiOutlineSpeakerWave size={20} />
                    </button>
                    <div className='bg-fg-highlight min-h-[6px] w-full rounded-full overflow-hidden'>
                        <div className='bg-theme h-[6px] w-[70%]' />
                    </div>
                </div>
            </div>
        </>
    )
}


const QueuePopup = ({ show, onClose }: { show: boolean, onClose: () => void; }) => {
    const { playerState } = useAudioPlayer();
    return <div className={classNames('bg-black h-[400px] w-[350px] fixed shadow-lg right-[40px] rounded-xl flex flex-col smooth-transition', {
        "bottom-[90px]": show,
        "bottom-[-590px]": !show,
    })}>
        <div className='flex gap-2 items-center p-2 min-h-[60px] border-b border-gray-900'>
            <button className='hover:bg-fg p-1 rounded-full hover:text-white text-fg-light' onClick={onClose}>
                <HiOutlineXMark size={20} />
            </button>
            <h6 className='text-lg'>Your Queue</h6>
        </div>
        <div className='flex-1 overflow-y-auto'>
            {
                playerState.queue.length === 0 ? <div className='h-full flex justify-center items-center opacity-40'>
                    <div className="flex flex-col gap-5 text-center ">
                        <center>
                            <HiInbox size={50} />
                        </center>
                        <p>No tracks added yet</p>
                    </div>
                </div> : null
            }
            {
                playerState.queue.map((track: any) => {
                    return <EachQueueTrack
                        key={`queue-${track.id}`}
                        track={track}
                    />
                })
            }
        </div>
    </div>
}

const EachQueueTrack = ({ track }: { track: TrackDataTable }) => {
    const { removeFromQueue } = useAudioPlayer()
    return <div className='flex gap-3 justify-between p-2 m-1 hover:bg-fg rounded-lg items-center group max-w-full'>
        <div className="flex gap-3 items-center group-hover:max-w-[66%] max-w-[70%]">
            <div className='min-h-[50px] min-w-[50px] rounded-md relative overflow-hidden'>
                <Image fill alt='track' src={track.album.cover_medium} className='absolute' />
            </div>
            <div className="flex flex-col max-w-full">
                <h5 className='font-semibold truncate'>{track.title} kkkkk</h5>
                <small>{track.artist.name}</small>
            </div>
        </div>
        <button className=' group-hover:opacity-100 opacity-0' onClick={() => removeFromQueue(track.id)}>
            <HiMiniTrash size={20} />
        </button>
    </div>
}
