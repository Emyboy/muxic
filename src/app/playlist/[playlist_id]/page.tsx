import PlaylistDetails from '@/components/PlaylistDetails/PlaylistDetails'
import { MUSIC_API_URL } from '@/constants';
import React from 'react'

export default async function page({ params }: any) {
    const { playlist_id } = params;

    const res = await fetch(MUSIC_API_URL + `/playlist/${playlist_id}`)
    const data = await res.json();

    return (
        <PlaylistDetails data={data} />
    )
}
