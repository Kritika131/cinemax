import React, { useState } from 'react'
import SwitchTabs from '../../switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../carousel/carousel';


const Popular = () => {
    const [endpoint,setEndpoint] = useState("movie");

    const {data,loading} = useFetch(`/${endpoint}/popular`);

    const onTabChange = (tab)=>{
       setEndpoint(tab==="Movies"?"movie" : "tv");
    }
  return (
    <div className='carouselSection'>
    <div className="wrapper">
        <span className="carouselTitle">What's Popular</span>
        <SwitchTabs data={["Movies","TV Shows"]} onTabChange={onTabChange}/>
    </div>
    <Carousel endpoint={endpoint} data = {data?.results} loading={loading}/>
    </div>
  )
}

export default Popular;