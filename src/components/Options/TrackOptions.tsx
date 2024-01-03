'use client'
import React from 'react'
import { DropdownMenuItem, DropdownMenuSeparator } from '../ui/dropdown-menu'
import { HiOutlinePlus, HiOutlineQueueList, HiOutlineShare } from 'react-icons/hi2'
import useAudioPlayer from '@/hooks/userAudioPlayer'
import { TrackDataTable } from '../TrackDataTable/TrackDataTable'

export default function TrackOptions({ track }: { track: TrackDataTable }) {
    const { addToQueue } = useAudioPlayer();

    return (
        <>
            <DropdownMenuItem onClick={() => addToQueue(track)}>
                <HiOutlineQueueList />
                Add to queue
            </DropdownMenuItem>
            <DropdownMenuItem>
                <HiOutlinePlus />
                Add to playlist
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <HiOutlineShare />
                Share
            </DropdownMenuItem>
        </>
    )
}
