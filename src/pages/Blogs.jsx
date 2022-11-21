import './blogs.css';
import {PostB} from "../posts/PostB"
import {PostB1} from "../posts/PostB1"
import { PostB2 } from '../posts/PostB2';
import {Sidebar} from "../sidebar/Sidebar"
import Footer from '../footer/footer';
import React from "react";

export const Blogs=()=>{
    return(
        <div className='aaa'>
    <div className='blog'>
        <PostB className='bc1'></PostB>
        <Sidebar></Sidebar>
    </div>
    <div className='blog'>
    <PostB1 className='bc2'></PostB1>
        <PostB2 className='bc3'></PostB2>
            </div>
            <div className='blog'>
    <PostB2 className='bc2'></PostB2>
        <PostB1 className='bc3'></PostB1>
            </div>
            <Footer></Footer>
            </div>

    )
}

