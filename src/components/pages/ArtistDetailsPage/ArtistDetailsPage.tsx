import React from 'react'
import TrackHero from '../TrackDetailsPage/TrackHero'
import TrackDataTable from '@/components/TrackDataTable/TrackDataTable'

type Props = {
    data: any
    tracks: any[]
}

export default function ArtistDetailsPage({ data, tracks }: Props) {
    return (
        <>
            <div className='flex flex-col gap-16'>
                <TrackHero
                    title={data.name}
                    artist_name={''}
                    artist_image={''}
                    bg_image={data.picture_small}
                    track_image={data.picture_medium}
                />

                <TrackDataTable
                    dataset={tracks.map(track => ({
                        id: track.id,
                        album: track.album,
                        artist: track.artist,
                        contributors: track.contributors.map((artist:any) => artist.name).join(", "),
                        duration: track.duration,
                        title: track.title
                    }))}
                />
            </div>
        </>
    )
}