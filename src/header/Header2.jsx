import './header2.css'
import img1 from '../content/header2.avif'
import React from "react";

export default function Header2() {
  return (
    <div className='header2'>
        <div className='headerTitles2'>
            <span className='lg_'>Please send us<br></br>
            Your valuable feedback.<br></br>
            It matters greatly to us
            <br></br> For improving your experience.</span>
        </div>
        <img className='headerImg2' src={img1}/>
    </div>
  )
}
