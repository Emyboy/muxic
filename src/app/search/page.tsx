import SearchResultPage from '@/components/pages/SearchResultPage/SearchResultPage'
import { MUSIC_API_URL } from '@/constants';
import React from 'react'


export default async function page({ searchParams }: any) {
    const { q } = searchParams;

    const res = await fetch(MUSIC_API_URL + `/search?q=${q}`)
    const data = await res.json();

    return (
        <SearchResultPage
            query={q}
            data={data.data}
        />
    )
}
