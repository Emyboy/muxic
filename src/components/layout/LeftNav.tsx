import React from 'react'
import { HiChartPie, HiMiniHome, HiMiniMusicalNote } from 'react-icons/hi2';
import { FaGithub, FaGlobe, FaInstagramSquare, FaTwitter } from 'react-icons/fa'
import Card from '../Card'

type Props = {}

export default function LeftNav({ }: Props) {
    return (
        <div className='text-fg-light min-w-[300px] max-w-[300px] border-r border-gray-800 fixed flex flex-col left-0 bottom-0 h-screen p-3 gap-3 z-50 overflow-y-auto'>
            <Card>
                <h1 className='text-lg mb-2'>Discover</h1>
                <EachNav title={`Charts`} Icon={HiChartPie} />
                <EachNav title={`Genre`} Icon={HiMiniMusicalNote} />
            </Card>
            <Card>
                <h1 className='text-lg mb-2'>The Developer</h1>
                <EachNav title={`View The Code`} Icon={FaGithub} />
                <EachNav title={`My Portfolio`} Icon={FaGlobe} />
                <EachNav title={`Twitter`} Icon={FaTwitter} />
                <EachNav title={`Instagram`} Icon={FaInstagramSquare} />
            </Card>
            <Card>
                <h1 className='text-lg mb-2'>Favorite Tracks</h1>
                {
                    new Array(3).fill(null).map((val,i) => {
                        return <EachNavTracks key={`track-${i}`} />
                    })
                }
            </Card>
            <Card>
                <h1 className='text-lg mb-2'>Favorite Artists</h1>
                {
                    new Array(5).fill(null).map((val,i) => {
                        return <EachNavTracks key={`track-${i}`} />
                    })
                }
            </Card>
        </div>
    )
}


const EachNav = ({ title, Icon }: { title: string, Icon: any }) => {
    return <div className="flex items-center gap-3 select-none hover:text-white cursor-pointer hover:bg-fg-highlight p-3 rounded-md shadow-lg" key={Math.random()}>
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
