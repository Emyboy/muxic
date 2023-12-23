import DefaultLayout from '@/components/layout/DefaultLayout'
import GenrePage from '@/components/pages/GenrePage'
import { MUSIC_API_URL } from '@/constants'
import React from 'react'

type Props = {}

export default async function page({ }: Props) {

    const res = await fetch(MUSIC_API_URL + `/genre`)
    const data = await res.json();

    console.log('DATA::', data)

    return (
        <GenrePage />
    )
}