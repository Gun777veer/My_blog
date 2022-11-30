import './footer1.css'
import { Link } from 'react-router-dom'
import React from "react";
import me from "../content/me.jpg"

export default function Footer1() {
  return (
    <div className='footer1'>
        <div className='ft1'>
        <span className='lg2'>Creator:</span>
        </div>
        <div className='ft1'>

        <img src={me} className='me'></img>
        <span className='sm3'>Name of this idiot:Gunveer<br></br>
        <br></br>Current occupation: Studying<br></br>
        <br></br>Age: Why do you care. 20.<br></br>
        <br></br>Favorite book: Many.<br></br>
        <br></br>Current favorite: Man called ove.<br></br>
        <br></br>
        Contact me by clicking on the link below:</span>
        </div>
        <div className='sm3'><Link to='/contact'>Contact</Link></div>

    </div>
  )
}
