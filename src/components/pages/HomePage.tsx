import React from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import EachSongCard from '../EachSong/EachSongCard'

type Props = {
    chartData: any;
}

export default function HomePage({ chartData }: Props) {
    return (
        <DefaultLayout>
            <div className="h-[400px] bg-fg rounded-lg mb-20 bg-[url(https://img.freepik.com/free-vector/gradient-electronic-music-facebook-cover_23-2149913287.jpg)] bg-no-repeat bg-center bg-cover" />
            {
                Object.keys(chartData).map((val, i) => {
                    return <div className="flex flex-col gap-10 mb-20" key={`section-${i}`}>
                        <h1 className='text-fg-light text-4xl capitalize'>Top {chartData[val].total} {val} </h1>
                        <div className='flex flex-wrap w-full gap-2'>
                            {
                                chartData[val].data.map((item: any) => {
                                    return <EachSongCard
                                        key={Math.random()}
                                        title={item.title || item.name}
                                        sub_title={item?.artist?.name || item?.user?.name || item?.description || ''}
                                        img_url={item?.album?.cover_xl || item.cover_medium || item.picture_big || ''}
                                    />
                                })
                            }
                        </div>
                    </div>
                })
            }
        </DefaultLayout>
    )
};
