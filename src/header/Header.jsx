import './header.css'
import img from '../content/header.jpeg'
import React from "react";

export default function Header() {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='sm'>This is</span>
            <span className='lg'>My Blog</span>
        </div>
        <img className='headerImg' src={img}/>
    </div>
  )
}
