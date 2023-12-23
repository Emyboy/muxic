import React from 'react'
import Skeleton from 'react-loading-skeleton'

type Props = {
    heading: string;
    children: any
    loading?: boolean
}

export default function EachSection({ heading, children, loading }: Props) {
    return (
        <div className="flex flex-col gap-10 mb-20">
            {
                loading ? <div className="opacity-20 rounded-lg shadow-md p-4 animate-pulse">
                    <div className="w-[400px] h-10 bg-gray-600 rounded mb-2"></div>
                </div> :
                    <h1 className='text-fg-light text-4xl capitalize'>{heading}</h1>
            }
            <div className='key-feature-grid mt-10 grid grid-cols-2 gap-7 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-5 w-full'>
                {
                    children
                }
            </div>
        </div>
    )
}