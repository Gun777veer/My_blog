import './posts.css'
import img2 from '../content/post1.avif'
import { Link } from 'react-router-dom'
import React from "react";

export const PostB = () => {
  return (
    <>
    <div className='post'>Book of the month
    <div className='top'>
    <img className='ij' src={img2}/>
    <div class="overlay">
    <div class="text"><Link to='/post1'>Read</Link></div>
  </div>
    </div>
    </div>
    </>
  )
}
