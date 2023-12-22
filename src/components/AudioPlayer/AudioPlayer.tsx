import React from 'react'

type Props = {}

export default function AudioPlayer({ }: Props) {
    return (
        <div
            className='fixed h-[80px] bg-black border-t border-gray-800 text-fg-light z-50 w-full bottom-0 left-0 ml-[300px] flex items-center px-5'
        >
            <div className="h-full flex items-center gap-5">
                <div className='bg-[url(/assets/img/man.jpg)] h-[60px] w-[60px] rounded-md' />
                <div className="h-full flex flex-col">
                    <h5>The Title</h5>
                    <small>The artist Name</small>
                </div>
            </div>
            
        </div>
    )
}