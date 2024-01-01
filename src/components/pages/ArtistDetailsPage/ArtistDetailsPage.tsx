import React from 'react'
import TrackHero from '../TrackDetailsPage/TrackHero'
import EachSection from '@/components/EachSection'
import EachSongCard from '@/components/EachSong/EachSongCard'

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
                    // onPlay={() => { }}
                />
                <EachSection heading='Popular'>
                    {
                        tracks.map((popular: any) => {
                            return <EachSongCard
                                key={Math.random()}
                                title={popular.title}
                                sub_title={popular.artist.name}
                                img_url={popular.album.cover_medium}
                                route={`/${popular.type}/${popular.id}`}
                            />
                        })
                    }
                </EachSection>
            </div>
        </>
    )
}