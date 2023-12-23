import React from 'react'
import { HiMiniPlay } from 'react-icons/hi2'
import Image from 'next/image'

type Props = {
    title: string
    sub_title: string
    img_url: string
}

const EachSongCard = ({ title, img_url, sub_title }: Props) => {
    return (
        <>
            <div className='bg-fg relative hover:bg-fg-highlight group w-[250px] mb-4 rounded-lg text-fg-light p-3 flex flex-col gap-1 transition transition-duration-500'>
                {/* <img src={img_url} alt='album' className='rounded-lg' /> */}
                <Image src={img_url} height={800} width={300} alt='album' className='h-[230px] rounded-lg mb-3 shadow-lg border border-black' />
                <h1 className='text-fg-light text-lg truncate group-hover:text-white font-semibold hover:underline cursor-pointer'>{title}</h1>
                <small className='hover:underline cursor-pointer truncate'>{sub_title}</small>
                <div className='h-16 w-16 bg-theme rounded-full flex justify-center items-center absolute top-[160px] right-7 group-hover:opacity-100 opacity-0 transition cursor-pointer shadow-lg'>
                    <HiMiniPlay className='text-fg' size={35} />
                </div>
            </div>
        </>
    )
}

export default EachSongCard;