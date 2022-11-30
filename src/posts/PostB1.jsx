import './postsb.css'
import img3 from '../content/post2.jpg'
import { Link } from 'react-router-dom'
import React from "react";

export const PostB1 = () => {
  return (
    <>
    <div className='postb'>Increasing Productivity
    <div className='topb'>
    <img className='ijb' src={img3}/>
    <div class="overlayb">
    <div class="textb"><Link to='/post2'>Read</Link></div>
  </div>
    </div>
    </div>
    </>
  )
}
