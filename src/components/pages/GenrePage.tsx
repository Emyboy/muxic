import React from 'react'
import { Genre } from '@/types'
import EachSection from '../EachSection'
import EachGenre from '../EachGanre/EachGenre'
import Link from 'next/link'

type Props = {
    genres: Genre[]
}

export default function GenrePage({ genres }: Props) {
    return (
        <EachSection heading='Genres'>
            <>
                {
                    genres.map(val => {
                        return <Link href={`/genre/${val.id}`} key={`genre-${val.id}`}>
                            <EachGenre
                                title={val.name}
                                img_url={val.picture_medium}
                            />
                        </Link>
                    })
                }
            </>
        </EachSection>
    )
};