import React, { useEffect, useState } from 'react'
import './style.scss'
import { useParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import { fetchDataFromApi } from '../../utils/api'
import noResults from "../../assets/._no-results.png"
import Loader from '../loader/Loader'
import MovieCard from '../movieCard/MovieCard'


const SearchResult = () => {
  const [data,setData] = useState(null);
  const [pageNo,setPageNo] = useState(1);
  const [loading,setLoading] = useState(false);
  const {query} = useParams();

  const fetchData = ()=>{
    setLoading(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNo}`).then((res)=>{
      setData(res)
      setPageNo((prev)=>prev + 1);
      setLoading(false)
    })
  }

  const fetchNextPageData=()=>{
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNo}`).then((res)=>{
      if(data?.results){
        setData({...data, results:[...data?.results, ...res.results]})
      } else{
        setData(res);
      }
      setPageNo((prev)=>prev+1);
    })
  }
  useEffect(()=>{
       fetchData();
  },[query])

  return (
    <div className='searchResultsPage'>
       {loading && <Loader initial={true}/>}
       {!loading && (
        <div className="wrapper">
          {data?.results.length > 0 ? (
              <>
                <div className="pageTitle">
                  {`Search ${data.total_results > 1 ? "results" : "result"} of '${query}'`}
                </div>
                <InfiniteScroll
                  className='content'
                  dataLength={data?.results?.length || []}
                  next={fetchNextPageData}
                  hasMore={pageNo <= data?.total_pages}
                  loader={<Loader/>}
                >{
                  data?.results?.map((item, idx)=>{
                    if(item.media_type==="person") return;
                    return (
                      <MovieCard key={idx} data={item} fromSearch={true}/>
                    )
                  })
                }</InfiniteScroll>
              </>
          ):(
            <span className="resultNotFound">
              Sorry, Results not found!
            </span>
          )}
        </div>
       )}

       
    </div>
  )
}

export default SearchResult;