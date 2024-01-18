import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='banner_buttons'>
                <div className='button'>Play</div>
                <div className='button'>My List</div>
            </div>
            <h1 className='descp'> Netflix is a popular streaming service that offers a wide range of TV shows, movies, documentaries, and original content to its subscribers. It was founded in 1997 and has since become one of the leading streaming platforms globally.</h1>
        </div>
       <div className="fade_bottom"></div>

    </div>
  )
}

export default Banner