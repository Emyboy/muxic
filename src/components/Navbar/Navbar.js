import React from 'react'

export default function Navbar() {
    return (
        <header id="header" className="site-header">
            {/* <div className="site-headbar">
                <p>Mock header, user can add custom html here</p>
            </div> */}
            <div className="header-container">
                <div className="site-navbar">
                    <div className="site-brand">
                        <label for="menu-state" id="icon-menu"><i className="icon-nav"></i></label>
                        <div className="site-logo"><a href="../../index.html" data-pjax-state=""><svg width="40" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="1.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                            {/* <g className="loading-bounce">
                                <line style="--n: 0" x1="3" y1="12" x2="3" y2="12"></line>
                                <line style="--n: 1" x1="6" y1="10" x2="6" y2="14"></line>
                                <line style="--n: 2" x1="9" y1="8" x2="9" y2="16"></line>
                                <line style="--n: 3" x1="12" y1="4" x2="12" y2="20"></line>
                                <line style="--n: 4" x1="15" y1="9" x2="15" y2="15"></line>
                                <line style="--n: 5" x1="18" y1="7" x2="18" y2="17"></line>
                                <line style="--n: 6" x1="21" y1="11" x2="21" y2="13"></line>
                            </g> */}
                        </svg>
                        </a></div>
                        <p className="site-title"><a href="../../index.html" rel="home" data-pjax-state="">Muxic</a></p>
                    </div>
                    <div className="flex"></div>
                    <form className="search-form" method="get" action="http://music.flatfull.com/waveme">
                        <input type="search" placeholder="Search..." value="" name="s" data-toggle="dropdown" />
                            <label for="search-state" id="icon-search">
                                <i className="icon-search"><i></i></i>
                            </label>
                            <div className="dropdown-menu"></div>
		</form>
                        <div className="flex"></div>
                        <nav id="secondary-menu" className="secondary-menu">
                            <label id="icon-nav">• • •</label>
                            <div className="menu-secondary-container"><ul id="menu-secondary" className="nav"><li id="menu-item-653" className="no-toggle menu-mega menu-mega-3 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-653"><a href="#" data-pjax-state="">Explore</a>
                                <ul className="sub-menu">
                                    <li id="menu-item-750" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-750"><a href="#" data-pjax-state="">Loop</a>
                                        <ul className="sub-menu">
                                            <li id="menu-item-739" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-739"><a href="../../grid-list-style/index.html" data-pjax-state="">Grid &amp; List style</a></li>
                                            <li id="menu-item-740" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-740"><a href="../../thumbnail/index.html" data-pjax-state="">Thumbnail</a></li>
                                            <li id="menu-item-738" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-738"><a href="../../columns/index.html" data-pjax-state="">Columns</a></li>
                                            <li id="menu-item-749" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-749"><a href="../../slider/index.html" data-pjax-state="">Slider</a></li>
                                            <li id="menu-item-762" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-762"><a href="../../pagination/index.html" data-pjax-state="">Pagination</a></li>
                                            <li id="menu-item-761" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-761"><a href="../../load-more/index.html" data-pjax-state="">Load more</a></li>
                                            <li id="menu-item-760" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-760"><a href="../../infinite/index.html" data-pjax-state="">Infinite</a></li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-751" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-751"><a href="#" data-pjax-state="">Play</a>
                                        <ul className="sub-menu">
                                            <li id="menu-item-696" className="menu-item menu-item-type-post_type menu-item-object-station menu-item-696"><a href="../../station/collection/index.html" data-pjax-state="">Album</a></li>
                                            <li id="menu-item-695" className="menu-item menu-item-type-post_type menu-item-object-station menu-item-695"><a href="../../station/on-the-flight/index.html" data-pjax-state="">Playlist</a></li>
                                            <li id="menu-item-668" className="menu-item menu-item-type-post_type menu-item-object-station menu-item-668"><a href="../../station/same-devil/index.html" data-pjax-state="">Youtube Music</a></li>
                                            <li id="menu-item-649" className="menu-item menu-item-type-post_type menu-item-object-station menu-item-649"><a href="../../station/girls-like-you-ft-cardi-b-youtube/index.html" data-pjax-state="">Youtube</a></li>
                                            <li id="menu-item-650" className="menu-item menu-item-type-post_type menu-item-object-station menu-item-650"><a href="../../station/soundcloud/index.html" data-pjax-state="">Soundcloud</a></li>
                                            <li id="menu-item-651" className="menu-item menu-item-type-post_type menu-item-object-station menu-item-651"><a href="../../station/hearthis/index.html" data-pjax-state="">Hearthis</a></li>
                                            <li id="menu-item-646" className="menu-item menu-item-type-post_type menu-item-object-station menu-item-646"><a href="../../station/blues-radio-uk/index.html" data-pjax-state="">Shoutcast</a></li>
                                            <li id="menu-item-648" className="menu-item menu-item-type-post_type menu-item-object-station menu-item-648"><a href="../../station/dance-wave-retro/index.html" data-pjax-state="">Icecast</a></li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-753" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-753"><a href="#" data-pjax-state="">Pages</a>
                                        <ul className="sub-menu">
                                            <li id="menu-item-785" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-785"><a href="../../page-with-hidden-nav/index.html" data-pjax-state="">Page without nav</a></li>
                                            <li id="menu-item-784" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-784"><a href="../../page-with-sidebar/index.html" data-pjax-state="">Page with sidebar</a></li>
                                            <li id="menu-item-783" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-783"><a href="../../page-with-diff-footer/index.html" data-pjax-state="">Page with diff footer</a></li>
                                            <li id="menu-item-694" className="menu-item menu-item-type-post_type menu-item-object-station menu-item-694"><a href="../../station/broken/index.html" data-pjax-state="">Infinite comments</a></li>
                                            <li id="menu-item-1181" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1181"><a href="../../landing/index.html" data-pjax-state="">Landing</a></li>
                                            <li id="menu-item-1345" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1345"><a href="../../about/index.html" data-pjax-state="">About</a></li>
                                            <li id="menu-item-1485" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1485"><a href="../../category/press/index.html" data-pjax-state="">Blog</a></li>
                                            <li id="menu-item-1602" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1602"><a href="../../contact/index.html" data-pjax-state="">Contact</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                                <li id="menu-item-652" className="no-toggle menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-652"><a href="#" data-pjax-state="">• • •</a>
                                    <ul className="sub-menu">
                                        <li id="menu-item-806" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-806"><a href="https://themeforest.net/user/flatfull/portfolio" data-pjax-state="">Purchase</a></li>
                                        <li id="menu-item-1619" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1619"><a href="http://music.flatfull.com/docs/" data-pjax-state="">Document</a></li>
                                        <li id="menu-item-857" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-857"><a href="https://themeforest.net/user/flatfull/portfolio" data-pjax-state="">Feedback</a></li>
                                    </ul>
                                </li>
                            </ul></div>			</nav>

                        <nav className="menu-before-login">
                            <div className="menu-before-login-container"><ul id="menu-before-login" className="nav"><li id="menu-item-485" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-485"><a href="../../login/index.html" data-pjax-state="">Signin</a></li>
                                <li id="menu-item-486" className="icon-user btn-link menu-item menu-item-type-post_type menu-item-object-page menu-has-icon menu-item-486"><a href="../../login/index0ddc.html?action=register" data-pjax-state=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="svg-icon" fill="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" role="img" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg><span>Signup</span></a></li>
                            </ul></div>			</nav>
					</div>
                </div>
	</header>
    )
}
