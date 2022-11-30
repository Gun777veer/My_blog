import Header from '../header/Header'
import {Post} from "../posts/Post"
import {Sidebar} from "../sidebar/Sidebar"
import Footer from '../footer/footer'
import './home.css'
import React from "react";


export const Home=()=>{
  return (
    <>
    <Header></Header>

    <div className='home'>
        <Post></Post>
        <Sidebar></Sidebar>
    </div>
    <Footer></Footer>

    </>
  )
}
