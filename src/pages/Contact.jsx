import React from "react";
import Header2 from "../header/Header2";
import Footer from "../footer/footer";
import './contact.css';

export const Contact=()=>{
    return(
        <div>
            {/* <Header1></Header1>
            <Footer1></Footer1> */}
            <Header2></Header2>
            <div className="containerC">
                <p className="sm">Contact Us:</p>
                <div className="cc">
                <form className="form_control">
                    <input type="text" placeholder='Your Name Here' name="user_name" required></input>
                    <input type="email" placeholder='Your E-mail Here' name="user_email" required></input>
                    <input type="text" placeholder='Enter the subject' name="subject" required></input>
                    <textarea name="message" placeholder="Enter your lovely message" cols='30' rows='10'></textarea>
                    <br></br>
                    <button type="submit" className="btn">Send your message</button>
                </form>
                <br></br>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
