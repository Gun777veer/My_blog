import './header1.css'
import img from '../content/about.webp'
import React from "react";

export default function Header1() {
  return (
    <div className='header1'>
        <div className='headerTitles1'>
            <span className='lg0'>This blog was created<br></br>
            with the idea of others<br></br>
            being able to share their creativity</span>
        </div>
        <img className='headerImg1' src={img}/>
    </div>
  )
}
