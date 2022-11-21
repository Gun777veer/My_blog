import './sidebar.css'
import img1 from '../content/fact.jpeg'
import React from "react";

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sbi'>
            <div className='sbt'>Fact of the day</div>
            <img className='i' src={img1}/>
            <p>On average, 100 people choke <br></br>to death on ballpoint pens <br></br>every year. Be Safe.</p>

        </div>
     </div>
  )
}
