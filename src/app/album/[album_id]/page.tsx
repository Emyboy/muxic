import AlbumDetailsPage from '@/components/pages/AlbumDetailsPage/AlbumDetailsPage'
import { MUSIC_API_URL } from '@/constants';
import React from 'react'

export default async function page({ params }: any) {
  const { album_id } = params;

  const res = await fetch(MUSIC_API_URL + `/album/${album_id}`)
  const data = await res.json();

  return (
    <AlbumDetailsPage data={data} />
  )
}
