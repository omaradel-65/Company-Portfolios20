import React from 'react'
import './App.css'
import "./styles.scss";
import Footer from './footer'
import BackToUp from './BackToUp'
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import Wobble from 'react-reveal/Wobble';
import Flash from 'react-reveal/Flash';
import Jump from 'react-reveal/Jump';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
const Blog = () => {
  return (
    <div>
        <Zoom left>

<div className='head-_-00'>

   <p className='head--0 ' >Home/Blog</p>
<h1 className='head-1' >Blog</h1>

</div>
</Zoom>
<div className='imga'>
<img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Chicago_Money_%2851293592769%29.jpg" alt="" />
  </div>
  <Fade bottom>
  <div className='mainblog row muuy'>
          <div className='col-xl-3 col-lg-3 col-sm-12 col-md-6'>
            <a href="#">Why Lead Generation is Key for Business Growth</a>
            <img className='imgblog' src="https://preview.colorlib.com/theme/uptown/images/image_1.jpg.webp" alt="" />
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </div>
          <div className='col-xl-3 col-lg-3 col-sm-12 col-md-6'>            <a href="#">Why Lead Generation is Key for Business Growth</a>
            <img className='imgblog' src="https://preview.colorlib.com/theme/uptown/images/image_2.jpg.webp" alt="" />
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p></div>
          <div className='col-xl-3 col-lg-3 col-sm-12 col-md-6'>            <a href="#">Why Lead Generation is Key for Business Growth</a>
            <img className='imgblog' src="https://preview.colorlib.com/theme/uptown/images/image_3.jpg.webp" alt="" />
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p></div>
          <div className='col-xl-3 col-lg-3 col-sm-12 col-md-6'>            <a href="#">Why Lead Generation is Key for Business Growth</a>
            <img className='imgblog' src="https://preview.colorlib.com/theme/uptown/images/image_4.jpg.webp" alt="" />
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p></div>
        </div>
        </Fade>
        <Fade bottom>
        <div className='mainblog row muuy'>
          <div className='col-xl-3 col-lg-3 col-sm-12 col-md-6'>
            <a href="#">Why Lead Generation is Key for Business Growth</a>
            <img className='imgblog' src="https://preview.colorlib.com/theme/uptown/images/image_1.jpg.webp" alt="" />
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </div>
          <div className='col-xl-3 col-lg-3 col-sm-12 col-md-6'>            <a href="#">Why Lead Generation is Key for Business Growth</a>
            <img className='imgblog' src="https://preview.colorlib.com/theme/uptown/images/image_2.jpg.webp" alt="" />
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p></div>
          <div className='col-xl-3 col-lg-3 col-sm-12 col-md-6'>            <a href="#">Why Lead Generation is Key for Business Growth</a>
            <img className='imgblog' src="https://preview.colorlib.com/theme/uptown/images/image_3.jpg.webp" alt="" />
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p></div>
          <div className='col-xl-3 col-lg-3 col-sm-12 col-md-6'>            <a href="#">Why Lead Generation is Key for Business Growth</a>
            <img className='imgblog' src="https://preview.colorlib.com/theme/uptown/images/image_4.jpg.webp" alt="" />
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p></div>
        </div>  
           </Fade>
         <Footer/>
         <BackToUp/>
    </div>
  )
}

export default Blog