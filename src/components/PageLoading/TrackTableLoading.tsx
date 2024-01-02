import React from 'react'
import Card from '../Card'

export default function TrackTableLoading() {
    return (
        <Card>
            <div className='opacity-20 animate-pulse- group flex flex-col gap-4'>

                <table className="text-fg-light table-auto w-full">
                    <thead>
                        <tr>
                            <th className='text-start pt-3 pb-4 border-b border-gray-800 opacity-50'>#</th>
                            <th className='text-start pt-3 pb-4 border-b border-gray-800 opacity-50'>Title</th>
                            <th className='text-start pt-3 pb-4 border-b border-gray-800 opacity-50'>Album</th>
                            <th className='text-start pt-3 pb-4 border-b border-gray-800 opacity-50'>Contributors</th>
                            <th className='text-start pt-3 pb-4 border-b border-gray-800 opacity-50'>Time</th>
                            <th className='text-start pt-3 pb-4 border-b border-gray-800 opacity-50'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            new Array(14).fill(null).map((_, i) => {
                                // console.log(val)
                                return <tr key={Math.random()} className='hover:bg-fg-highlight rounded-lg'>
                                    <td className='px-2 max-w-[10px]'>{i + 1}</td>
                                    <td className='max-w-[100px]'>
                                        <div className="flex items-center gap-4 py-3">
                                            <div className="relative overflow-hidden min-w-[40px] min-h-[40px] rounded-md bg-gray-600">

                                            </div>
                                            <div className="flex flex-col">
                                                <div className='hover:underline hover:text-white'>
                                                    <h5 className='font-semibold  truncate max-w-[300px] pr-5'>
                                                        <div className="h-[10px] bg-gray-600 mb-2 rounded-lg w-[100px]"></div>
                                                    </h5>
                                                </div>
                                                <div className='hover:underline hover:text-white'>
                                                    <p>
                                                        <div className="h-[10px] bg-gray-600 mb-2 rounded-lg"></div>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='truncate max-w-[300px] '>
                                        <div className='hover:underline hover:text-white'>
                                            <div className="h-[10px] bg-gray-600 mb-2 rounded-lg"></div>
                                        </div>
                                    </td>
                                    <td className='truncate max-w-[300px] pr-7'>
                                        <div className="h-[10px] bg-gray-600 mb-2 rounded-lg"></div>
                                    </td>
                                    <td >
                                        <div className="h-[10px] bg-gray-600 mb-2 rounded-lg"></div>
                                    </td>
                                    <td className='px-5'>
                                        <div className="h-[10px] bg-gray-600 mb-2 rounded-lg"></div>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </Card>
    )
}
