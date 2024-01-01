'use client'
import React from 'react'
import TrackHero from '../pages/TrackDetailsPage/TrackHero';
import EachSection from '../EachSection';
import EachSongCard from '../EachSong/EachSongCard';

type Props = {
    data: any;
}

export default function PlaylistDetails({ data }: Props) {
    return (
        <>
            <div className='flex flex-col gap-16'>
                <TrackHero
                    title={data.title}
                    artist_name={data.creator.name}
                    artist_image={''}
                    bg_image={data.picture_small}
                    track_image={data.picture_medium}
                    description={data.description}
                    onPlay={() => { }}
                />
                <EachSection heading='Tracks'>
                    {
                        data.tracks.data.map((popular: any) => {
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