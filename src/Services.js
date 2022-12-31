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
const Services = () => {
  return (
    <div>
<Zoom left>

<div className='head-_-00'>

   <p className='head--0 '  >Home/Services</p>
<h1 className='head-1' >Services</h1>

</div>
</Zoom>
<div className='imga'>
<img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Chicago_Money_%2851293592769%29.jpg" alt="" />
  </div>
  <Fade bottom cascade>
<h1 className='secit1'>The Smartest way to buy a home</h1>
<div className='maintext row'>
<div className='anas col-xl-3 col-lg-3 col-sm-12 col-md-3'>
<i  class="fa-solid fa-piggy-bank"></i>

<h3>No Downpayment</h3>
<p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
</div>

<div className='anas col-xl-3 col-lg-3 col-sm-12 col-md-3'>
<i class="fa-solid fa-wallet "></i>

<h3>All Cash Offer</h3>
<p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
</div>

<div className='anas col-xl-3 col-lg-3 col-sm-12 col-md-3'>
<i class="fa-solid fa-file-lines "></i>

<h3>Experts in Your Corner</h3>
<p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
</div>

<div className='anas col-xl-3 col-lg-3 col-sm-12 col-md-3'>
<i class="fa-solid fa-lock "></i>

<h3>Lokced in Pricing</h3>
<p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
</div>

</div>
</Fade>
<div className='container mainlargo'>
<div className='largdiv'>
<Bounce bottom>
<div className='bordarsem2'>
    <span className='bordeer3'></span> <span className='ouuur2'>WORK FLOW</span> <span className='bordeer4'></span>
  <h1 className='bigggtt'>How it works</h1>
    <div className='maintext2'>
<div className='secntext2'>
<div className='circlee'>
  <span>01</span>
  </div>
<h3>Evaluate Property</h3>
<p>A small river named Duden flows</p>
<p>by their place and supplies it with</p>
<p>the necessary regelialia.</p>
</div>
<div className='secntext3'>
  <div className='circlee'>
  <span>02</span>
  </div>
<h3>Meet Your Agent</h3>
<p>A small river named Duden flows</p>
<p>by their place and supplies it with</p>
<p>the necessary regelialia.</p>
</div>
</div>
</div>
<div className='maintext3'>
<div className='secntext3'>
<div className='circlee'>
  <span>03</span>
  </div>
<h3>Close the Deal</h3>
<p>A small river named Duden flows</p>
<p>by their place and supplies it with</p>
<p>the necessary regelialia.</p>
</div>
<div className='secntext3'>
  <div className='circlee'>
  <span>04</span>
  </div>
<h3>Have Your Property</h3>
<p>A small river named Duden flows</p>
<p>by their place and supplies it with</p>
<p>the necessary regelialia.</p>
</div>
</div></Bounce>
</div>
  <div className='largeimg'>
  </div>
</div>
<Footer/>
<BackToUp/>
    </div>
  )
}

export default Services