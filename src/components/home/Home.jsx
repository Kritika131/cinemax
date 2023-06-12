import React from 'react'
import './style.scss'
import HeroBanner from './herobanner/HeroBanner'
import Trending from './trending/trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';
const Home = () => {
    
  return (
    <div className="home_container">
       <HeroBanner/>
       <Trending/>
       <Popular/>
       <TopRated/>
       
    </div>
  )
}


export default Home