import React, { useState } from 'react'
import SwitchTabs from '../../switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../carousel/carousel';


const Trending = () => {
    const [endpoint,setEndpoint] = useState("day");

    const {data,loading} = useFetch(`/trending/all/${endpoint}`);

    const onTabChange = (tab)=>{
       setEndpoint(tab==="Day"?"day" : "week");
    }
  return (
    <div className='carouselSection'>
    <div className="wrapper">
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day","Week"]} onTabChange={onTabChange}/>
    </div>
    <Carousel data = {data?.results} loading={loading}/>
    </div>
  )
}

export default Trending;