import React from 'react'
import './App.css'
import "./styles.scss";
import Footer from './footer'
import Map from './Map'
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

function contact() {
  return (
    <div>
  <div>
    <Zoom left>

<div className='head-_-00'>

   <p className='head--0 '  >Home/Contact</p>
<h1 className='head-1' >Contact</h1>

</div>
</Zoom>
<div className='imga'>
<img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Chicago_Money_%2851293592769%29.jpg" alt="" />
  </div>
    </div>
    <div class="row d-flex mb-5 contact-info justify-content-center">
<div class="col-md-8">
<div class="row mb-5">
<div class="col-md-4 text-center py-4">
<div class="icon">
<span class="icon-map-o"><i class="fa-solid fa-map"></i></span>
</div>
<p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
</div>
<div class="col-md-4 text-center border-height py-4">
<div class="icon">
<span class="icon-mobile-phone"><i class="fa-solid fa-mobile-screen-button"></i></span>
</div>
<p><span>Phone:</span> <a href="tel://201101848363">+20 1101848363</a></p>
</div>
<div class="col-md-4 text-center py-4">
<div class="icon">
<span class="icon-envelope-o"><i class="fa-solid fa-envelope"></i></span>
</div>
<p><span>Email:</span> <a href="mailto:info@yoursite.com">uptown@gmail.com</a></p>
</div>
</div>
</div>
<div class="row block-9 justify-content-center mb-5">
<div class="col-md-8 mb-md-5">
<h2 class="text-center">If you got any questions <br/>please do not hesitate to send us a message</h2>
<form action="#" class="bg-light p-5 contact-form">
<div class="form-group">
<input type="text" class="form-control" placeholder="Your Name"/>
</div>
<div class="form-group">
<input type="text" class="form-control" placeholder="Your Email"/>
</div>
<div class="form-group">
<input type="text" class="form-control" placeholder="Subject"/>
</div>
<div class="form-group">
<textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
</div>
<div class="form-group">
<input type="submit" value="Send Message" class="btn btn-primary py-3 px-5"/>
</div>
</form>
</div>
</div>
</div>

<div className='maapdiv'>
  <Map/>
</div>



<BackToUp/>
<Footer/>
    </div>
  )
}

export default contact