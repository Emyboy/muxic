import React from 'react'
import Card from '../Card';
import Image from 'next/image';
import Link from 'next/link';
import { secondsToMinutes } from '@/utils';
import { HiEllipsisHorizontal, HiMiniPlay } from 'react-icons/hi2';

type TrackDataTable = {
    id: number;
    title: string
    album: any
    artist: any
    contributors: string
    duration: number
}

type Props = {
    dataset: TrackDataTable[]
}

export default function TrackDataTable({ dataset }: Props) {
    return (
        <Card>
            <table className="text-fg-light table-auto w-full">
                <thead>
                    <tr>
                        <th className='text-start pt-3 pb-4 border-b border-gray-800 opacity-50'>#</th>
                        <th className='text-start pt-3 pb-4 border-b border-gray-800 opacity-50'>Title</th>
                        <th className='text-start pt-3 pb-4 border-b border-gray-800 opacity-50'>Album</th>
                        <th className='text-start pt-3 pb-4 border-b border-gray-800 opacity-50'>Contributors</th>
                        <th className='text-start pt-3 pb-4 border-b border-gray-800 opacity-50'>Time</th>
                        <th className='text-start pt-3 pb-4 border-b border-gray-800 opacity-50'></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataset.map((val, i) => {
                            // console.log(val)
                            return <tr key={Math.random()} className='hover:bg-fg-highlight rounded-xl overflow-hidden hover:shadow-lg group'>
                                <td className='px-4 max-w-[20px]'>
                                    <span className='group-hover:hidden'>{i + 1}</span>
                                    <button className='group-hover:block hidden hover:text-theme cursor-pointer'>
                                        <HiMiniPlay size={20} />
                                    </button>
                                </td>
                                <td>
                                    <div className="flex items-center gap-4 py-3">
                                        <div className="relative overflow-hidden min-w-[40px] min-h-[40px] rounded-md">
                                            <Image fill src={val.album.cover_medium} alt={val.title} className='absolute' />
                                        </div>
                                        <div className="flex flex-col">
                                            <Link href={`/track/${val.id}`} className='hover:underline hover:text-white'>
                                                <h5 className='font-semibold  truncate max-w-[300px] pr-5'>{val.title}</h5>
                                            </Link>
                                            <Link href={`/artist/${val.artist.id}`} className='hover:underline hover:text-white'>
                                                <p>{val.artist.name}</p>
                                            </Link>
                                        </div>
                                    </div>
                                </td>
                                <td className='truncate max-w-[300px] '>
                                    <Link href={`/album/${val.album.id}`} className='hover:underline hover:text-white'>
                                        {val.album.title}
                                    </Link>
                                </td>
                                <td className='truncate max-w-[300px] pr-7'>{val.contributors}</td>
                                <td >{secondsToMinutes(val.duration)}</td>
                                <td className='px-5'>
                                    <HiEllipsisHorizontal size={25} />
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </Card>
    )
}
