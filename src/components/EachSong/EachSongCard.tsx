import React from 'react'
import Card from '../Card'
import { HiMiniPlay } from 'react-icons/hi2'

type Props = {
    title: string
    img_url: string
}

const EachSongCard = ({ title, img_url }: Props) => {
    return (
        <>
            <div className='bg-fg relative group w-[250px] mb-4 rounded-lg text-fg-light p-3 flex flex-col gap-4 transition transition-duration-500'>
                <img src={img_url} alt='album' className='rounded-lg' />
                <h1 className='text-fg-light text-lg truncate'>{title}</h1>
                <div className='h-16 w-16 bg-theme rounded-full flex justify-center items-center absolute top-[160px] right-7 group-hover:opacity-100 opacity-0 transition cursor-pointer shadow-md'>
                    <HiMiniPlay className='text-fg' size={35} />
                </div>
            </div>
        </>
    )
}

export default EachSongCard;