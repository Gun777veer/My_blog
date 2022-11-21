import './post1.css'
import img2 from '../content/post1.avif'
import Footer from '../footer/footer'
import { Sidebar } from '../sidebar/Sidebar'
import React from "react";


export const Post1 = () => {
  return (
    <>
    <div className='postp'>
    <div className='post'>Book of the day
    <img className='j' src={img2}/>
    <span className='sm1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit veniam error nam placeat alias cumque, distinctio ullam voluptatem iste minus laudantium eligendi a fugit cum nihil exercitationem repudiandae sunt rem!
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque omnis minima inventore nemo optio et aliquid tempore neque. Minus veniam facere voluptate maiores impedit adipisci quam cumque voluptatem, fugiat dolores?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum corrupti optio, assumenda laudantium iure totam aut, pariatur adipisci id necessitatibus, nemo in facere sequi. Esse mollitia iste possimus soluta.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, provident! Voluptate autem assumenda laboriosam, minima consequatur rem magni ab nam esse et? Cupiditate a in, fugit ipsam provident libero quasi?</span>

    </div>
    <Sidebar></Sidebar>
    </div>
    <Footer></Footer>
    </>
  )
}
