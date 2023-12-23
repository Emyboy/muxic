import React from 'react'

type Props = {
    title: string;
    img_url: string;
}

export default function EachGenre({ img_url, title }: Props) {
    return (
        <div className={`bg-fg h-[300px] group cursor-pointer p-5 rounded-lg flex flex-col justify-between shadow-lg bg-no-repeat bg-center bg-cover relative`} style={{ backgroundImage: `url(${img_url})`}}>
            <div className='bottom-gradient absolute h-full w-full left-0 top-0 opacity-70 group-hover:opacity-100 ease-in-out transition' />
            <span className='absolute bottom-3 right-3 text-white text-3xl font-bold opacity-70  group-hover:opacity-100'>{title}</span>
        </div>
    )
}