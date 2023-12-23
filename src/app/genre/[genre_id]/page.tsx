import GenreDetails from '@/components/pages/GenreDetailsPage';
import { MUSIC_API_URL } from '@/constants'
import React from 'react'


export default async function page(props: any) {
  let { genre_id } = props.params;

  const res = await fetch(MUSIC_API_URL + `/genre/${genre_id}/artists`);
  const data = await res.json();

  return (
    <GenreDetails list={data.data} />
  )
}
