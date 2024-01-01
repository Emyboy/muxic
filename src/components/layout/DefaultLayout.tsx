
import React from 'react'
import Header from './Header'
import LeftNav from './LeftNav'

type Props = {
    children: React.ReactNode
}

export default function DefaultLayout({ children }: Props) {
    return (
        <div className='min-h-[100vh] max-h-[100vh] select-none'>
            <Header />
            <main className='pt-[80px] min-h-screen max-h-screen flex flex-col'>
                <div className="flex flex-1 ml-[300px]" style={{ height: 'calc(100% - 80px)' }}>
                    <LeftNav />
                    <div className="p-5 w-full pb-[7rem]">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    )
}