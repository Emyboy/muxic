import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function Card({ children }: Props) {
    return (
        <div className='p-4 bg-fg rounded-lg flex-col gap-3 flex text-fg-light'>
            {children}
        </div>
    )
}