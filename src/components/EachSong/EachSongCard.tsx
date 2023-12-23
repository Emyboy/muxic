import React from 'react'
import { HiMiniPlay } from 'react-icons/hi2'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'

type Props = {
    title: string
    sub_title: string
    img_url: string
    route?: string
    sub_route?: string
}

const EachSongCard = ({ title, img_url, sub_title, route, sub_route }: Props) => {
    return (
        <>
            <div className='bg-fg relative hover:bg-fg-highlight group  mb-4 rounded-lg text-fg-light p-3 flex flex-col gap-1 transition transition-duration-500'>
                {/* <img src={img_url} alt='album' className='rounded-lg' /> */}
                <Image src={img_url} height={800} width={300} alt='album' className='h-[230px] rounded-lg mb-3 shadow-lg border border-black' />
                <Link href={route || ''}>
                    <h1 className='text-fg-light text-lg truncate group-hover:text-white font-semibold hover:underline cursor-pointer'>{title}</h1>
                </Link>
                <Link href={sub_route || ''} className='truncate'>
                    <small className={classNames('truncate', { "cursor-pointer hover:underline": sub_route })}>{sub_title}</small>
                </Link>
                <div className='h-16 w-16 bg-theme rounded-full flex justify-center items-center absolute top-[160px] right-7 group-hover:opacity-100 opacity-0 transition cursor-pointer shadow-lg'>
                    <HiMiniPlay className='text-fg' size={35} />
                </div>
            </div>
        </>
    )
}

export default EachSongCard;