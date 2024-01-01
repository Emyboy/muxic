import AlbumDetailsLoading from '@/components/PageLoading/AlbumDetailsLoading'
import React from 'react'
import TrackHero from '../TrackDetailsPage/TrackHero'
import EachSection from '@/components/EachSection';
import EachSongCard from '@/components/EachSong/EachSongCard';

type Props = {
    data: any;
}

export default function AlbumDetailsPage({ data }: Props) {
    return (
        <>
            <div className='flex flex-col gap-16'>
                <TrackHero
                    title={data.title}
                    artist_name={data.artist.name}
                    artist_image={data.artist.picture_small}
                    bg_image={data.cover_small}
                    track_image={data.cover_medium}
                    onPlay={() => { }}
                />
                <EachSection heading='Popular'>
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