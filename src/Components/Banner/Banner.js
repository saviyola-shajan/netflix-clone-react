import React, {useState, useEffect } from 'react'
import './Banner.css'
import axios from '../../Axios'
import {API_KEY,imageUrl} from '../../Constants/Constants'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(()=>{
   axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
   .then((response)=>{
    const randomIndex=Math.floor(Math.random()* response.data.results.length);
    const randomMovie=response.data.results[randomIndex]
          setMovie(randomMovie)
   })
  },[])
  return (
    <div style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie? movie.title:""}</h1>
            <div className='banner_buttons'>
                <div className='button'>Play</div>
                <div className='button'>My List</div>
            </div>
            <h1 className='descp'> {movie?movie.overview:""}</h1>
        </div>
       <div className="fade_bottom"></div>

    </div>
  )
}

export default Banner