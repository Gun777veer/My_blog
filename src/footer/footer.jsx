import './footer.css'
import { Link } from 'react-router-dom'
import React from "react";

export default function Footer() {
  return (
    <div className='footer'>
        <div className='ft'>
        <span className='lg1'>About the blog:</span>
        <span className='sm2'>Here you can read the various blog posts that have been uploaded.</span>
        <span className='sm2'>For more info visit our about page.</span>
        <div className='sm2'><Link to='/about'>About</Link></div>
        </div>
    </div>
  )
}
