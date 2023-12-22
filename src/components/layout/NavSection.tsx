import React from 'react'
import Card from '../Card'

type Props = {
    children: any;
    heading: string;
}

export default function NavSection({ children, heading }: Props) {
    return (
        <>
            <Card>
                <h1 className='text-sm mb-2'>{heading}</h1>
                {children}
            </Card>
        </>
    )
}