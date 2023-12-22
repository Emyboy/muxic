import React from 'react'
import { FaStepBackward, FaStepForward } from 'react-icons/fa'
import { HiMiniPlayCircle, HiOutlineHeart, HiOutlineQueueList, HiOutlineSpeakerWave } from 'react-icons/hi2'

type Props = {}

export default function AudioPlayer({ }: Props) {
    return (
        <div
            className='fixed h-[80px] bg-black border-t border-gray-800 text-fg-light z-50 bottom-0 left-0 ml-[300px] px-5 flex right-0 justify-between gap-5'
        >
            <div className="h-full flex items-center gap-5">
                <div className='bg-[url(/assets/img/man.jpg)] h-[60px] w-[60px] rounded-md' />
                <div className="h-full flex flex-col justify-center">
                    <h5 className='text-white'>The Title</h5>
                    <small>The artist Name</small>
                </div>
                <div className='h-full flex flex-col justify-center hover:text-theme cursor-pointer'>
                    <HiOutlineHeart size={20} />
                </div>
            </div>

            <div className='h-full flex items-center p-3 flex-1 flex-col'>
                <div className="flex w-full justify-center items-center gap-5">
                    <FaStepBackward size={20} />
                    <HiMiniPlayCircle size={40} className='text-white' />
                    <FaStepForward size={20} />
                </div>
                <div className='flex  items-center w-[70%] gap-5'>
                    <small>0:06</small>
                    <div className='flex-1 rounded-full min-w-[80%] h-1 bg-fg overflow-hidden'>
                        <div className='bg-fg-light w-[40%] h-1' />
                    </div>
                    <small>2:25</small>
                </div>
            </div>

            <div className='h-full flex items-center gap-5 p-3 min-w-[200px]'>
                <HiOutlineQueueList size={20} />
                <div className="flex h-full items-center flex-1 gap-3">
                    <HiOutlineSpeakerWave size={20} />
                    <div className='bg-fg-highlight min-h-[6px] w-full rounded-full overflow-hidden'>
                        <div className='bg-theme h-[6px] w-[70%]' />
                    </div>
                </div>
            </div>


        </div>
    )
}