import './NavBar.css';
import { Contact } from '../pages/Contact';
import { About } from '../pages/About';
import { Blogs } from '../pages/Blogs';
import { Home } from '../pages/Home';
import {Link} from 'react-router-dom';
import React from 'react';
import Hamburger from "hamburger-react";
import { useState } from "react";


export default function NavBar() {
  const [isOpen, setOpen] = useState(false);
  const myStyle={
    width: "40%",
    height: "300px",
    position: "sticky",
    top: "0",
    display: "none"
  }
  return (
    <>
        {/* <div className='Nav'>
      <div className='topLeft'>My_blog</div>
      <div className='topCentre'>
        <ul className='topList'>
          <li className='listItem'>Home</li>
          <li className='listItem'>Blogs</li>
          <li className='listItem'>About</li>
          <li className='listItem'>Contact</li>
        </ul>
      </div>
   </div> */}

<div className='Nav'>
      <div className='topLeft'><Link className='h' to='/'>My_blog</Link></div>
      <div className='topCentre'>
        <div className='topList'>
          <div className='listItem'><Link className='h' to='/home'>Home</Link></div>
          <div className='listItem'><Link className='h' to='/blogs'>Blogs</Link></div>
          <div className='listItem'><Link className='h' to='/about'>About</Link></div>
          <div className='listItem'><Link className='h' to='/contact'>Contact</Link></div>
        </div>
      </div>
      <div className='ham'><Hamburger onToggle={toggled => {
  if (toggled) {
     // open a menu
  } else {
     // close a menu
  }
}} /></div>
   </div>
   {/* <div style={{myStyle}}>
      <div className='topCentre1'>
        <div className='topList1'>
          <div className='listItem1'><Link className='h' to='/home'>Home</Link></div>
          <div className='listItem1'><Link className='h' to='/blogs'>Blogs</Link></div>
          <div className='listItem1'><Link className='h' to='/about'>About</Link></div>
          <div className='listItem1'><Link className='h' to='/contact'>Contact</Link></div>
        </div>
      </div>
   </div> */}

    </>

  )
}


