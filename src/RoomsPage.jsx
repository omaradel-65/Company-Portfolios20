import React from 'react'
import './App.css'
import "./styles.scss";
import { useState, useEffect } from "react";
import BackToUp from './BackToUp'
import { CSSProperties } from "react";
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
import ClipLoader from "react-spinners/ClipLoader";
const RoomsPage = () => {
  return (
    <div>
    <div>
    <Zoom left>

<div className='head-_-00'>

   <p className='head--0 '  >Home/Properties Single</p>
<h1 className='head-1' >Properties Single</h1>

</div>
</Zoom>
<div className='imga'>
<img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Chicago_Money_%2851293592769%29.jpg" alt="" />
  </div>
    </div>
    <div className='roomsback container'>
   <img src="https://preview.colorlib.com/theme/uptown/images/work-1.jpg.webp" alt="" /> 
    </div>
    <div className='text-center'>
    <span>OAKLAND</span>
    <h1>The Blue Sky Home</h1>
    </div>
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-toggle="tab" data-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Features</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-toggle="tab" data-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Description</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-toggle="tab" data-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Review</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
  <div class="row">
<div class="col-md-4">
<ul class="features">
<li class="check"><span class="ion-ios-checkmark"><i class="fa-solid fa-check"></i></span>Lot Area: 1,250 SQ FT</li>
<li class="check"><span class="ion-ios-checkmark"><i class="fa-solid fa-check"></i></span>Bed Rooms: 4</li>
<li class="check"><span class="ion-ios-checkmark"><i class="fa-solid fa-check"></i></span>Bath Rooms: 4</li>
<li class="check"><span class="ion-ios-checkmark"><i class="fa-solid fa-check"></i></span>Luggage</li>
<li class="check"><span class="ion-ios-checkmark"><i class="fa-solid fa-check"></i></span>Garage: 2</li>
</ul>
</div>
<div class="col-md-4">
<ul class="features">
<li class="check"><span class="ion-ios-checkmark"><i class="fa-solid fa-check"></i></span>Floor Area: 1,300 SQ FT</li>
<li class="check"><span class="ion-ios-checkmark"><i class="fa-solid fa-check"></i></span>Year Build:: 2019</li>
<li class="check"><span class="ion-ios-checkmark"><i class="fa-solid fa-check"></i></span>Water</li>
<li class="check"><span class="ion-ios-checkmark"><i class="fa-solid fa-check"></i></span>Stories: 2</li>
<li class="check"><span class="ion-ios-checkmark"><i class="fa-solid fa-check"></i></span>Roofing: New</li>
</ul>
</div>
<div class="col-md-4">
<ul class="features">
<li class="check"><span class="ion-ios-checkmark"><i class="fa-solid fa-check"></i></span>Floor Area: 1,300 SQ FT</li>
<li class="check"><span class="ion-ios-checkmark"><i class="fa-solid fa-check"></i></span>Year Build:: 2019</li>
<li class="check"><span class="ion-ios-checkmark"><i class="fa-solid fa-check"></i></span>Water</li>
<li class="check"><span class="ion-ios-checkmark"><i class="fa-solid fa-check"></i></span>Stories: 2</li>
<li class="check"><span class="ion-ios-checkmark"><i class="fa-solid fa-check"></i></span>Roofing: New</li>
</ul>
</div>
</div>
  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar</p>
    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way</p>
  </div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
    <div className='row'>
  <div class="col-md-7">
<h3 class="head">23 Reviews</h3>
<div class="review d-flex">
<div class="user-img">
</div>
<div class="desc">
<h4>
<span class="text-left">Jacob Webb</span>
<span class="text-right">14 March 2018</span>
</h4>
<p class="star">
<span>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
</span>
<span class="text-right"><a href="#" class="reply"><i class="fa-solid fa-reply"></i></a></span>
</p>
<p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
</div>
</div>
</div>
<div class="col-md-7">
<div class="review d-flex">
<div class="user-img imgecoment">
</div>
<div class="desc">
<h4>
<span class="text-left">Jacob Webb</span>
<span class="text-right">14 March 2018</span>
</h4>
<p class="star">
<span>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
</span>
<span class="text-right"><a href="#" class="reply"><i class="fa-solid fa-reply"></i></a></span>
</p>
<p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
</div>
</div>
</div>
<div class="col-md-7">

<div class="review d-flex">
<div class="user-img imgecoment2">
</div>
<div class="desc">
<h4>
<span class="text-left">Jacob Webb</span>
<span class="text-right">14 March 2018</span>
</h4>
<p class="star">
<span>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
</span>
<span class="text-right"><a href="#" class="reply"><i class="fa-solid fa-reply"></i></a></span>
</p>
<p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
</div>
</div>
</div>
<div class="col-md-5 starReating">
<div class="rating-wrap">
<h3 class="head">Give a Review</h3>
<div class="wrap">
<p class="star">
<span>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
(98%)
</span>
<span>20 Reviews</span>
</p>
<p class="star">
<span>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
(85%)
</span>
<span>10 Reviews</span>
</p>
<p class="star">
<span>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
(70%)
</span>
<span>5 Reviews</span>
</p>
<p class="star">
<span>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
(10%)
</span>
<span>0 Reviews</span>
</p>
<p class="star">
<span>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
(0%)
</span>
<span>0 Reviews</span>
</p>
</div>
</div>
</div>
  </div>
  </div>
</div>
<Footer/>
    </div>
  )
}

export default RoomsPage