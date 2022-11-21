import './posts.css'
import img2 from '../content/post1.avif'
import { Link } from 'react-router-dom'
import React from "react";

export const Post = () => {
  return (
    <>
    <div className='post'>Post of the day
    <div className='top'>
    <img className='ij' src={img2}/>
    <div class="overlay">
    <div class="text"><Link to='/post1'>Book of the month</Link></div>
  </div>
    </div>
    </div>
    </>
  )
}
