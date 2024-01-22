import React, {useEffect,useState} from 'react'
import './RowPost.css'
import Youtube from 'react-youtube'
import axios from '../../Axios'
import {API_KEY,imageUrl} from '../../Constants/Constants'

function RowPost({title,isSmall,url}) {
  const [movies,setMovies]=useState([])
  const [urlId,setUrlId]=useState('')
useEffect(()=>{
  axios.get(url).then((response)=>{
    console.log(response.data);
    setMovies(response.data.results)
  }).catch(err=>{
    console.log("error");
  })
},[])
const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};
const handleMovie=(id)=>{
console.log(id);
axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
console.log(response.data);
if(response.data.results.length!==0){
  setUrlId(response.data.results[0])
}else{
  console.log('Array is Empty');
}
})
}
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className="posters">
        {movies.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} className={isSmall?'smallPost':'post'} src={`${imageUrl+obj.backdrop_path}`} alt="posters" />
        )}
        </div>
        {urlId && <Youtube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default RowPost