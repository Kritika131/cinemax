import { useState,useEffect } from 'react'
import {fetchDataFromApi} from './utils/api';
import { useSelector,useDispatch } from 'react-redux';
import { getApiConfiguration,getGenres } from './store/homeSlice';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/footer';
import ErrorPage from './components/404/ErrorPage'
import Details from './components/details/Details';
import SearchResult from './components/searchResult/SearchResult'
import Explore from './components/explore/Explore';
import { all } from 'axios';          


function App() {

  const dispatch = useDispatch();
  const {url} = useSelector((state)=>state.home);

  useEffect(()=>{
    fetchApiConfig();
    genresApiCall()
  },[])

  const fetchApiConfig=()=>{
    fetchDataFromApi('/configuration').then((res)=>{
      console.log(res);
      const url ={
        backdrop:res.images.secure_base_url + "original",
        poster:res.images.secure_base_url + "original",
        profile:res.images.secure_base_url + "original",

      }
      dispatch(getApiConfiguration(url))

    })
  }

  const genresApiCall = async()=>{
    let promises = []
    let endPoints = ["tv","movie"];
    let allGenres = {}
    
    endPoints.forEach((url)=>{
      promises.push(fetchDataFromApi(`/genre/${url}/list`))
    })

    const data= await Promise.all(promises);
    // console.log(data);
    data?.map(({genres})=>{
      // console.log(genres);
        return genres.map((item)=>(allGenres[item.id] = item));
    })
    // console.log(allGenres);
    dispatch(getGenres(allGenres))
  }


  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:mediaType/:id' element={<Details/>} />
        <Route path='/search/:query' element={<SearchResult/>} />
        <Route path='/explore/:mediaType' element={<Explore/>} />
        <Route path='*' element={<ErrorPage/>} />
        
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  )
}

export default App;



{/* <div className='App'>
         {url?.total_pages}
    </div> */}
