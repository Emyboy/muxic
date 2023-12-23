import TrackDetailsPage from '@/components/pages/TrackDetailsPage/TrackDetailsPage'
import { MUSIC_API_URL } from '@/constants'
import React from 'react'


export default async function page(props:any) {

    const { track_id } = props.params;

    // get top track for that artist: https://api.deezer.com/artist/27/top?limit=50
    // get album details: https://api.deezer.com/album/302127

    const trackRes = await fetch(MUSIC_API_URL + `/track/${track_id}`);
    const trackData = await trackRes.json();

    const popularRes = await fetch(MUSIC_API_URL + `/artist/${trackData.artist.id}/top?limit=50`);
    const popularData = await popularRes.json();

    return (
        <TrackDetailsPage trackData={trackData} popular={popularData.data} />
    )
};