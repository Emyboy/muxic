import Image from 'next/image'
import React from 'react'
import { HiMiniPlay } from 'react-icons/hi2'

type Props = {
    bg_image: string;
    track_image: string;
    title: string;
    onPlay?: () => void;
    artist_image: string;
    artist_name: string;
}

export default function TrackHero({ artist_image, artist_name, bg_image, onPlay, title, track_image }: Props) {
    return (
        <div className='relative h-[500px]'>
            <div className='bg-fg h-[500px] rounded-xl flex flex-col justify-end p-10 bg-center bg-no-repeat bg-cover' style={{ backgroundImage: `url(${bg_image})` }}>

                <div className='glass-bg-dark rounded-xl absolute top-0 left-0 bottom-0 right-0 z-10 p-10' />
            </div>
            <div className="flex gap-4 z-40 absolute bottom-0 m-10 items-end">
                <div className='overflow-hidden relative min-w-[300px] h-[300px] w-[300px] rounded-xl shadow-xl'>
                    <Image
                        src={track_image}
                        alt=''
                        fill
                        className='absolute'
                    />
                    {onPlay && <div className='h-20 w-20 bg-theme rounded-full flex justify-center items-center absolute bottom-4 right-4 transition cursor-pointer shadow-md'>
                        <HiMiniPlay className='text-fg' size={40} />
                    </div>}
                </div>
                <div className="flex flex-col h-full justify-end gap-7">
                    <h1 className='text-white text-7xl font-bold'>{title}</h1>
                    {artist_name && <div className="flex gap-4 items-center">
                        <Image src={artist_image} alt='artist' width={40} height={40} className='rounded-full' />
                        <h3 className='text-white'>{artist_name}</h3>
                    </div>}
                </div>
            </div>
        </div>
    )
}