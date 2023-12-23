import React from 'react'
import TrackHero from './TrackHero'
import EachSection from '@/components/EachSection'
import EachSongCard from '@/components/EachSong/EachSongCard'

type Props = {
    trackData: any
    popular: any[]
}

export default function TrackDetailsPage({ trackData, popular }: Props) {
    return (
        <div className="flex flex-col gap-28">
            <TrackHero trackData={trackData} />
            <EachSection heading='Popular'>
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
            </EachSection>
        </div>
    )
}