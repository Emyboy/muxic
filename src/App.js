import React from 'react'

import './assets/css/dist/block-library/style.min77e1.css'
import './assets/css/dist/block-library/theme.min77e1.css'

import './assets/plugins/loop-block/build/style.minde54.css'

import './assets/themes/play/style.min77e1.css'
import './assets/themes/waveme/theme77e1.css'
import './assets/themes/waveme/style77e1.css'

import SideNav from './components/SideNav/SideNav'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'

export default function App() {
  return (
    <div>
      <Navbar />
      <div id='content' className='site-content'>
        <Home />
      </div>
      <SideNav />
    </div>
  )
}
