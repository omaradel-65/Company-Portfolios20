import React from 'react'
import './App.css'
import "./styles.scss";
import Footer from './footer'
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
import BackToUp from './BackToUp'
const Agent = () => {
  return (
    <div>
 <section >
<Zoom left>

<div className='head-_-00'>

   <p className='head--0 '  >Home/Agent</p>
<h1 className='head-1' >Agent</h1>

</div>
</Zoom>
<div className='imga'>
<img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Chicago_Money_%2851293592769%29.jpg" alt="" />
  </div>
  <div className='bordarsem4'>
    <span className='bordeer11'></span> <span className='ouuur4'>Agents</span> <span className='bordeer12'></span>

</div>
  <h1 className='secit1'>Our Agents</h1>
    <div class="divlargermin row">
            <div   class=" uimggdiv1 col-xl-3 col-lg-3 col-sm-12 col-md-6 mb-4" data-wow-delay="3s">
                <img src="https://preview.colorlib.com/theme/uptown/images/team-1.jpg.webp" alt=""/>
                <h1>James Stallon</h1>
                <h3>Listing-10 Properties</h3>
                
            </div>
            <div class="uimggdiv2  col-xl-3 col-lg-3 col-sm-12 col-md-6 mb-4">
                <img src="https://preview.colorlib.com/theme/uptown/images/team-2.jpg.webp" alt=""/>
                <h1>James Stallon</h1>
                <h3>Listing-10 Properties</h3>
            </div>
            <div class="uimggdiv3  col-xl-3 col-lg-3 col-sm-12 col-md-6 mb-4">
                <img src="https://preview.colorlib.com/theme/uptown/images/team-3.jpg.webp" alt=""/>
                <h1>James Stallon</h1>
                <h3>Listing-10 Properties</h3>
            </div>
            <div class="uimggdiv3   col-xl-3 col-lg-3 col-sm-12 col-md-6 mb-4" >
                <img src="https://preview.colorlib.com/theme/uptown/images/team-4.jpg.webp" alt=""/>
                <h1>James Stallon</h1>
                <h3>Listing-10 Properties</h3>
            </div>
        </div>
    <div class="divlargermin row">
            <div   class="uimggdiv1 col-xl-3 col-lg-3 col-sm-12 col-md-6 mb-4" data-wow-delay="3s">
                <img src="https://preview.colorlib.com/theme/uptown/images/team-5.jpg.webp" alt=""/>
                <h1>James Stallon</h1>
                <h3>Listing-10 Properties</h3>
                
            </div>
            <div class="uimggdiv2  col-xl-3 col-lg-3 col-sm-12 col-md-6 mb-4">
                <img src="https://preview.colorlib.com/theme/uptown/images/team-7.jpg.webp" alt=""/>
                <h1>James Stallon</h1>
                <h3>Listing-10 Properties</h3>
            </div>
            <div class="uimggdiv3  col-xl-3 col-lg-3 col-sm-12 col-md-6 mb-4">
                <img src="https://preview.colorlib.com/theme/uptown/images/team-6.jpg.webp" alt=""/>
                <h1>James Stallon</h1>
                <h3>Listing-10 Properties</h3>
            </div>
            <div class="uimggdiv3   col-xl-3 col-lg-3 col-sm-12 col-md-6" >
                <img src="https://preview.colorlib.com/theme/uptown/images/team-8.jpg.webp" alt=""/>
                <h1>James Stallon</h1>
                <h3>Listing-10 Properties</h3>
            </div>
        </div>
        <Footer/>
  </section>
  <BackToUp/>
    </div>
  )
}

export default Agent