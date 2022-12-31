import React from 'react'
import Nav from './Nav'
import About from './About'
import Shop from './Shop'
import Contact from './Contact'
import Properties from './Properties'
import RoomsPage from './RoomsPage'
import { useState, useEffect } from "react";
import Headers from './header'
import Footer from './footer'
import Home from './Home'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BrowserRouter, Routes , Route ,Link} from 'react-router-dom'
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import Agent from './Agent'
import Apps from './App'
import Services from './Services'
import Blog from './Blog'
import ClipLoader from "react-spinners/ClipLoader";
const App = () => {

  let [loading, setLoading] = useState(false);
  useEffect(()=>{
 setLoading(true)
 setTimeout(()=> {
     setLoading(false)
 },1000) 
  },[])

  return (
 
 <BrowserRouter>
 <Nav/>

 {  loading?
        <div className='loodingPage'>
          <div className='loodingPage2'>
                   <ClipLoader  className='spppin' color="#ffffff"  
        size={100}
        speedMultiplier={1}
      /> 
          </div>
</div> 
      
      :

  <Routes>

  <Route path='/' element={<Home />} />
  <Route path='/About' element={<About />} />
  <Route path='/Agent' element={<Agent />} />
  <Route path='/Services' element={<Services />} />
  <Route path='/Properties' element={<Properties />} />
  <Route path='/Blog' element={<Blog />} />
  <Route path='/Shop' element={<Shop />} />
  <Route path='/RoomsPage' element={<RoomsPage />} />
  <Route path='/Contact' element={<Contact />} />

  </Routes>
 }
  </BrowserRouter>
  )

}

export default App