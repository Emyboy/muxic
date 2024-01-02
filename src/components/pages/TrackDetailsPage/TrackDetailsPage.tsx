import React from 'react'
import TrackHero from './TrackHero'
import TrackDataTable from '@/components/TrackDataTable/TrackDataTable'

type Props = {
    trackData: any
    popular: any[]
}

export default function TrackDetailsPage({ trackData, popular }: Props) {
    return (
        <div className="flex flex-col gap-28">
            <TrackHero
                bg_image={trackData.album.cover_small}
                track_image={trackData.album.cover_medium}
                title={trackData.title}
                onPlay={() => { }}
                artist_image={trackData.artist.picture_small}
                artist_name={trackData.artist.name}
            />

            <TrackDataTable
                dataset={popular.map(track => ({
                    id: track.id,
                    album: track.album,
                    artist: track.artist,
                    contributors: track.contributors.map((artist: any) => artist.name).join(", "),
                    duration: track.duration,
                    title: track.title,
                    preview: track.preview
                }))}
            />

            {/* <EachSection heading='Similar Tracks'>
                {
                    popular.map(popular => {
                        return <EachSongCard
                            key={Math.random()}
                            title={popular.title}
                            sub_title={popular.artist.name}
                            img_url={popular.album.cover_medium}
                            route={`/${popular.type}/${popular.id}`}
                        />
                    })
                }
            </EachSection> */}
        </div>
    )
}