import React from 'react';
import Link from 'next/link'
import { HiMagnifyingGlass, HiMiniUserCircle } from 'react-icons/hi2'

type Props = {}

export default function Header({ }: Props) {
    return (
        <>
            <header className='bg-fg h-[80px] fixed left-0 right-0 top-0 flex items-center px-[20px] justify-between gap-[50px] ml-[300px] z-50 shadow-lg'>
                <Link href={`/`} className='text-theme text-2xl font-bold'>
                    Muxic
                </Link>
                <div className='bg-black flex p-3 rounded-full flex-1 items-center gap-4'>
                    <HiMagnifyingGlass className='text-gray-500' size={25} />
                    <input className='flex-1 bg-inherit outline-none text-gray-400' placeholder='Search song here...' />
                </div>
                <button className='text-gray-500'>
                    <HiMiniUserCircle size={35} />
                </button>
            </header>
        </>
    )
}