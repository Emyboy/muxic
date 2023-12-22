import HomePage from '@/components/pages/HomePage'
import { MUSIC_API_URL } from '@/constants'
import React from 'react'

export default async function page() {

  const res = await fetch(MUSIC_API_URL + `/chart`, {
    cache: 'no-store'
  });
  const data = await res.json();

  return (
    <div className='max-h-screen h-screen relative'>
      <HomePage chartData={data} />
    </div>
  )
}
