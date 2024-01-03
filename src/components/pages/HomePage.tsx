import React from 'react'
import EachSongCard from '../EachSong/EachSongCard'
import EachSection from '../EachSection';

type Props = {
    chartData: any;
}

export default function HomePage({ chartData }: Props) {
    return (
        <>
            <div className="h-[400px] bg-fg rounded-lg mb-20 bg-[url(https://img.freepik.com/free-vector/gradient-electronic-music-facebook-cover_23-2149913287.jpg)] bg-no-repeat bg-center bg-cover" />
            <div className='pb-36'>

                {
                    Object.keys(chartData).map((val, i) => {
                        return <EachSection heading={`Top ${chartData[val].total} ${val} `} key={Math.random()}>
                            <>
                                {
                                    chartData[val].data.map((item: any) => {
                                        return <EachSongCard
                                            key={Math.random()}
                                            title={item.title || item.name}
                                            sub_title={item?.artist?.name || item?.user?.name || item?.description || ''}
                                            img_url={item?.album?.cover_xl || item.cover_medium || item.picture_big || ''}
                                            route={`/${item.type}/${item.id}`}
                                        />
                                    })
                                }
                            </>
                        </EachSection>
                    })
                }
            </div>
        </>
    )
};
