import ArtistDetailsPage from '@/components/pages/ArtistDetailsPage/ArtistDetailsPage';
import { MUSIC_API_URL } from '@/constants';
import React from 'react'

export default async function page({ params }: any) {

  const { artist_id } = params;

  const res = await fetch(MUSIC_API_URL + `/artist/${artist_id}`)
  const data = await res.json();

  const trackRes = await fetch(data.tracklist)
  const tracks = await trackRes.json();

  return (
    <ArtistDetailsPage data={data} tracks={tracks.data} />
  )
}
