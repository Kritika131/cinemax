import React, { useEffect, useState } from 'react'
import './style.scss';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from '../../lazyLoadingImage/Img';

const HeroBanner = () => {
  const [bg,setBg]=useState("");
  const [query,setQuery] =useState("");
  const navigate = useNavigate();
  const {url} = useSelector((state)=>state.home);

  const {data,loading}=useFetch("/movie/upcoming");
  // console.log(data);
  useEffect(()=>{
     const background = url.backdrop + data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path;
     setBg(background);
     
  },[data]);

  const searchQueryHandler=(e)=>{
     if(e.key==="Enter" && query.length>0){
        navigate(`/search/${query}`)
     }
  }

  return (
    
    <div className="heroContainer">
    {!loading && <div className="backdrop-img">
        <Img src={bg}/>
    </div>}
    <div className="opacity-layer"></div>
    
      <div className="wrapper">
        <div className="content">
          <span className="title">Welcome․</span>
          <span className="subtitle">Millions of movies, TV shows and people to discover.
          Explore now.</span>
          <div className="searchInput">
            <input type="text" placeholder='Search for a movie or tv show....' 
            onKeyUp={searchQueryHandler}
             onChange={(e)=>setQuery(e.target.value)}/>
            <button>Search</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroBanner 