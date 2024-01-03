import EachSection from '@/components/EachSection'
import React from 'react'

type Props = {}

export default function loading({ }: Props) {
    return <SectionLoading />
}

export const SectionLoading = () => {
    return <EachSection loading heading='Genre'>
        {
            new Array(10).fill(null).map((val, i) => {
                return <div className='opacity-20 animate-pulse group flex flex-col gap-4' key={Math.random()}>
                    {/* <div className="opacity-20 animate-pulse w-[300px] h-[300px] group cursor-pointer p-5 rounded-lg flex flex-col justify-between shadow-lg bg-no-repeat bg-center bg-cover relative" key={`load-${i}`}> */}
                    <div className="h-[250px] bg-gray-600 mb-2 rounded-lg"></div>
                    <div className="w-[90%] h-6 bg-gray-600 rounded-lg mb-2"></div>
                    <div className="w-[60%] h-4 bg-gray-600 rounded-lg mb-2"></div>
                </div>
            })
        }
    </EachSection>
}