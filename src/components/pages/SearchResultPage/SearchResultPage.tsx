import EachSection from '@/components/EachSection'
import EachSongCard from '@/components/EachSong/EachSongCard'
import React from 'react'

type Props = {
    query: string
    data: any[]
}

export default function SearchResultPage(props: Props) {
    const { query, data } = props;
    return (
        <EachSection heading={`Search: ${query || ''}`}>
            {
                data.map(data => {
                    return <EachSongCard
                        key={`result-${data.id}`}
                        title={data.title}
                        img_url={data.album.cover_medium}
                        sub_title={data.artist.name}
                        route={`/${data.type}/${data.id}`}
                    />
                })
            }
        </EachSection>
    )
}