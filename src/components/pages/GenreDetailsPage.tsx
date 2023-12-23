import { Artist } from '@/types'
import React from 'react'
import EachSection from '../EachSection'
import EachSongCard from '../EachSong/EachSongCard'

type Props = {
    list: Artist[]
}

export default function GenreDetailsPage({ list }: Props) {
    return (
        <EachSection heading='Artists'>
            {
                list.map(artist => {
                    return <EachSongCard
                        key={`artist-${artist.id}`}
                        title={artist.name}
                        sub_title=''
                        img_url={artist.picture_medium}
                    />
                })
            }
        </EachSection>
    )
}