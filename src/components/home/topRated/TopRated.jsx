import React, { useState } from 'react'
import SwitchTabs from '../../switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../carousel/carousel';


const TopRated = () => {
    const [endpoint,setEndpoint] = useState("movie");

    const {data,loading} = useFetch(`/${endpoint}/top_rated`);

    const onTabChange = (tab)=>{
       setEndpoint(tab==="Movies"?"movie" : "tv");
    }
  return (
    <div className='carouselSection'>
    <div className="wrapper">
        <span className="carouselTitle">Top Rated</span>
        <SwitchTabs data={["Movies","TV Shows"]} onTabChange={onTabChange}/>
    </div>
    <Carousel endpoint={endpoint} data = {data?.results} loading={loading}/>
    </div>
  )
}

export default TopRated;