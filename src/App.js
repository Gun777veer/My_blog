import NavBar from "./NavBar/NavBar";
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Blogs } from './pages/Blogs';
import { Home } from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React from "react";

import { Post1 } from "./posts/post1";
import { Post2 } from "./posts/post2";
import { Post3 } from "./posts/post3";


function App() {
  return (

    <div className="App">
      {/* <Home> </Home> */}
      {/* <Blogs></Blogs> */}
      {/* <Post1></Post1> */}
      {/* <Post2></Post2> */}
            <Router>
            <NavBar></NavBar>
            <Routes>
            <Route path="/" element={<Home></Home>}></Route>
              <Route path="/home" element={<Home></Home>}></Route>
              <Route path='/blogs' element={<Blogs></Blogs>}></Route>
              <Route path='/contact' element={<Contact></Contact>}></Route>
              <Route path='/about' element={<About></About>}></Route>
              <Route path='/post1' element={<Post1></Post1>}></Route>
              <Route path='/post2' element={<Post2></Post2>}></Route>
              <Route path='/post3' element={<Post3></Post3>}></Route>
            </Routes>
            </Router>
    </div>
  );
}

export default App;
