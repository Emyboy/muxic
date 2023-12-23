'use client'
import React from 'react'
import { HiChartPie, HiMiniHome, HiMiniMusicalNote } from 'react-icons/hi2';
import { FaGithub, FaGlobe, FaInstagramSquare, FaTwitter } from 'react-icons/fa'
import Card from '../Card';
import { usePathname, useRouter } from 'next/navigation'
import NavSection from './NavSection';
import classNames from 'classnames';

type Props = {}

export default function LeftNav({ }: Props) {

    const router = useRouter();
    const path = usePathname()

    console.log(path)

    return (
        <div className='text-fg-light min-w-[300px] max-w-[300px] border-r border-gray-800 fixed flex flex-col left-0 bottom-0 h-screen p-3 gap-3 z-50 overflow-y-auto'>
            <NavSection heading='Discovery'>
                <EachNav title={`Charts`} Icon={HiChartPie} onClick={() => router.push('/')} isActive={path === '/'} />
                <EachNav title={`Genre`} Icon={HiMiniMusicalNote} onClick={() => router.push('/genre')} isActive={path.includes('genre')} />
            </NavSection>

            <NavSection heading='The Developer'>
                <EachNav title={`View The Code`} Icon={FaGithub} />
                <EachNav title={`My Portfolio`} Icon={FaGlobe} />
                <EachNav title={`Twitter`} Icon={FaTwitter} />
                <EachNav title={`Instagram`} Icon={FaInstagramSquare} />
            </NavSection>
            <NavSection heading='Favorite Tracks'>
                {
                    new Array(3).fill(null).map((val, i) => {
                        return <EachNavTracks key={`track-${i}`} />
                    })
                }
            </NavSection>
            <NavSection heading='Favorite Artists'>
                {
                    new Array(5).fill(null).map((val, i) => {
                        return <EachNavTracks key={`track-${i}`} />
                    })
                }
            </NavSection>
        </div>
    )
}


const EachNav = ({ title, Icon, onClick, isActive }: { title: string, Icon: any, onClick?: () => void, isActive?: boolean }) => {
    return <div
        className={classNames(`flex items-center gap-3 select-none hover:text-white cursor-pointer hover:bg-fg-highlight p-3 rounded-md shadow-lg`, { "bg-fg-highlight": isActive })}
        key={Math.random()}
        onClick={onClick}
    >
        <Icon size={25} /> <span>{title}</span>
    </div>
}

const EachNavTracks = () => {
    return <div className='flex gap-3 hover:text-white hover:bg-fg-highlight p-2 rounded-md cursor-pointer'>
        <div className='bg-[url(/assets/img/man.jpg)] h-12 w-12 rounded-md' />
        <div className="flex flex-col">
            <h3 className='font-semibold'>The title</h3>
            <small>This is the sub title</small>
        </div>
    </div>
}
