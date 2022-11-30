import './postsb.css'
import img4 from '../content/post3.jpg'
import { Link } from 'react-router-dom'
import React from "react";

export const PostB2 = () => {
  return (
    <>
    <div className='postb'>Morning Coffee Blues
    <div className='topb'>
    <img className='ijb' src={img4}/>
    <div class="overlayb">
    <div class="textb"><Link to='/post3'>Read</Link></div>
  </div>
    </div>
    </div>
    </>
  )
}
