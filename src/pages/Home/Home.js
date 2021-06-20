import React from 'react'
import SongCard from '../../components/SongCard/SongCard'

export default function Home() {
    return (
        <div id='primary' className='content-area'>
            <main id="main" className='site-main'>
                <article id='post-17' className='post-17 page type-page status-publish hentry entry '>


                    <nav className="navigation page-navigation">
                        <ul className="nav"><li className="page_item page-item-15"><a href="../new-release/index.html" data-pjax-state="">New Release</a></li>
                            <li className="page_item page-item-326"><a href="../popular/index.html" data-pjax-state="">Popular</a></li>
                            <li className="page_item page-item-17 current_page_item"><a href="index.html" aria-current="page" data-pjax-state="">Music</a></li>
                            <li className="page_item page-item-21"><a href="../podcasts/index.html" data-pjax-state="">Podcasts</a></li>
                            <li className="page_item page-item-19"><a href="../radio/index.html" data-pjax-state="">Radio</a></li>
                            <li className="page_item page-item-25"><a href="../album/index.html" data-pjax-state="">Album</a></li>
                            <li className="page_item page-item-282"><a href="../playlist/index.html" data-pjax-state="">Playlist</a></li>
                            <li className="page_item page-item-23"><a href="../genre/index.html" data-pjax-state="">Genre</a></li>
                        </ul>
                    </nav>

                    <div className='entry-content'>
                        <div className='wp-block-loop wp-block-loop-station  align'>
                            <div className='block-loop-items'>

                                <SongCard />
                                <SongCard />
                                <SongCard />
                                <SongCard />
                                <SongCard />
                                <SongCard />

                            </div>
                        </div>
                    </div>


                </article>
            </main>

        </div>
    )
}
