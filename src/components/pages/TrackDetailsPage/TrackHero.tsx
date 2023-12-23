import Image from 'next/image'
import React from 'react'

type Props = {
    trackData: any
}

export default function TrackHero({ trackData }: Props) {
    return (
        <div className='relative h-[500px]'>
            <div className='bg-fg h-[500px] rounded-xl flex flex-col justify-end p-10 bg-center bg-no-repeat bg-cover' style={{ backgroundImage: `url(${trackData.album.cover_small})` }}>

                <div className='glass-bg-dark rounded-xl absolute top-0 left-0 bottom-0 right-0 z-10 p-10' />
            </div>
            <div className="flex gap-4 z-40 absolute bottom-0 m-10 items-end">
                <div className='overflow-hidden relative h-[300px] w-[300px] rounded-xl shadow-lg'>
                    <Image src={trackData.album.cover_medium} alt='' fill className='absolute ' />
                </div>
                <div className="flex flex-col h-full justify-end gap-7">
                    <h1 className='text-white text-7xl font-bold'>{trackData.title}</h1>
                    <div className="flex gap-4 items-center">
                        <Image src={trackData.artist.picture_small} alt='artist' width={40} height={40} className='rounded-full' />
                        <h3 className='text-white'>{trackData.artist.name}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}