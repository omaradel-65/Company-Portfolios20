import React from 'react'
import './App.css'
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
const Footer = () => {
  return (
    <div>
  <footer>
    <div class="content">
      <div class="top">
        <div class="logo-details">
          <i class="fab fa-slack"></i>
          <span class="logo_name">Uptown</span>
        </div>
        <div class="media-icons">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
      <div class="link-boxes">
        <ul class="box">
          <li class="link_name">Company</li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
        <ul class="box">
          <li class="link_name">Community</li>
          <li><a href="#">Search Properties</a></li>
          <li><a href="#">For Agents</a></li>
          <li><a href="#">Reviews</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
        <ul class="box">
          <li class="link_name">About Us</li>
          <li><a href="#">Our Story</a></li>
          <li><a href="#">Meet the team</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Purchase</a></li>
        </ul>
        <div class="secondlargdivof5">
    <div>
    <h1 className='link_name'>Contact Info</h1>
</div>
<div class="locasssts">
 <div>
 <i class="fa-solid fa-location-dot"></i>
</div>
<div class="locationicondiv">
 <p>203 Fake St. Mountain View,</p>
 <p> San Francisco, California, USA</p>
 </div>
</div>
 <div class="locasssts2">
 <div>
    <i class="fa-solid fa-phone"></i>
   </div>
   <div class="locationicondiv2">
    <p>01101848363</p>
    </div>
</div>
    <div class="locasssts3">
    <div>
        <i class="fa-solid fa-envelope"></i>
   </div>
       <div class="locationicondiv2">
        <p>omarsilvawa@gmail.com</p>
        </div>
    </div>
</div>

        <ul class="box input-box">
          <li class="link_name">Subscribe</li>
          <li><input type="text" placeholder="Enter your email"/></li>
          <li><input type="button" value="Subscribe"/></li>
        </ul>
      </div>
    </div>
    <div class="bottom-details">
      <div class="bottom_text">
        <span class="copyright_text">Copyright © 2021 <a href="#">Uptown</a>All rights reserved</span>
        <span class="policy_terms">
          <a href="#">Privacy policy</a>
          <a href="#">Terms & condition</a>
        </span>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer