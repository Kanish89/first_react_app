import React from 'react'
import Navbar from "./Navbar";
import { Route, Routes } from 'react-router-dom';
import Rootlayout from './Layout/Rootlayout';
import Myaccount from './Screen/Myaccount';
import Slideshow from './Screen/Slideshow';
import {Link } from "react-router-dom";
import Axious from './Screen/Page2.';
import Body from './Screen/Body';

function App() {
  return (

  <>
  
      <Navbar />
      <Routes>
        <Route path="/" element={<Rootlayout />}>
          <Route path="/Myaccount" element={<Myaccount />} />
          <Route path='/Axious' element={<Axious/>}/>
        </Route>
      </Routes>
     
    
    <Slideshow />
    <Body/>
  </>
  )
}

export default App;
