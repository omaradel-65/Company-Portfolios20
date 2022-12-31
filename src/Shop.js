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

function Shop() {
  // 😔🙂😆🤣😉😊😇🥰😋🤑
  const [data,setData] = useState(0)
  const [emoji,setEmoji] = useState('')
  useEffect(()=>{
      if(data == 0){
          setEmoji("😔")
      }else if(data == 100){
          setEmoji("🙂")
      }else if(data == 300){
          setEmoji("😆")
      }else if(data == 500){
          setEmoji("🤣")
      }else if(data == 800){
          setEmoji("😉")
      }else if(data == 1000){
          setEmoji("😊")
      }else if(data == 1500){
          setEmoji("😇")
      }else if(data == 2000){
          setEmoji("🥰")
      }else if(data == 2400){
          setEmoji("🤩")
      }else if(data ==2800){
          setEmoji("😋")
      }else if(data == 3000){
          setEmoji("🤑")
      }
  },[data])

  return (
    <div>
    
    <div>
    <Zoom left>

<div className='head-_-00'>

   <p className='head--0 '  >Home/Rooms</p>
<h1 className='head-1' >Rooms</h1>

</div>
</Zoom>
<div className='imga'>
<img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Chicago_Money_%2851293592769%29.jpg" alt="" />
  </div>
    </div>
<div className='container'>
<div className='row'>
<div class="col-12 col-lg-8">

<div class="single-room-area d-flex align-items-center mb-6">

<div class="room-thumbnail">
<img src="https://preview.colorlib.com/theme/roberto/img/bg-img/43.jpg.webp" alt=""/>
</div>

<div class="room-content">
<h2>Room View Sea</h2>
<h4>400$ <span>/ Day</span></h4>
<div class="room-feature">
<h6>Size: <span>30 ft</span></h6>
<h6>Capacity: <span>Max persion 5</span></h6>
<h6>Bed: <span>King beds</span></h6>
<h6>Services: <span>Wifi, television ...</span></h6>
</div>
<a href="/RoomsPage" class=" view-detail-btn">View Details <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
</div>
</div>
</div>
<div class="col-12 col-lg-8">

<div class="single-room-area d-flex align-items-center mb-6">

<div class="room-thumbnail">
<img src="https://preview.colorlib.com/theme/roberto/img/bg-img/44.jpg.webp" alt=""/>
</div>

<div class="room-content">
<h2>Small Room</h2>
<h4>400$ <span>/ Day</span></h4>
<div class="room-feature">
<h6>Size: <span>30 ft</span></h6>
<h6>Capacity: <span>Max persion 5</span></h6>
<h6>Bed: <span>King beds</span></h6>
<h6>Services: <span>Wifi, television ...</span></h6>
</div>
<a href="/RoomsPage" class=" view-detail-btn">View Details <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
</div>
</div>
</div>
<div class="col-12 col-lg-8">

<div class="single-room-area d-flex align-items-center mb-6">

<div class="room-thumbnail">
<img src="https://preview.colorlib.com/theme/roberto/img/bg-img/45.jpg.webp" alt=""/>
</div>

<div class="room-content">
<h2>Premium King Room</h2>
<h4>400$ <span>/ Day</span></h4>
<div class="room-feature">
<h6>Size: <span>30 ft</span></h6>
<h6>Capacity: <span>Max persion 5</span></h6>
<h6>Bed: <span>King beds</span></h6>
<h6>Services: <span>Wifi, television ...</span></h6>
</div>
<a href="/RoomsPage" class=" view-detail-btn">View Details <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
</div>
</div>
</div>
<div class="col-12 col-lg-8">

<div class="single-room-area d-flex align-items-center mb-6">

<div class="room-thumbnail">
<img src="https://preview.colorlib.com/theme/roberto/img/bg-img/46.jpg.webp" alt=""/>
</div>

<div class="room-content">
<h2>Room Vip King</h2>
<h4>400$ <span>/ Day</span></h4>
<div class="room-feature">
<h6>Size: <span>30 ft</span></h6>
<h6>Capacity: <span>Max persion 5</span></h6>
<h6>Bed: <span>King beds</span></h6>
<h6>Services: <span>Wifi, television ...</span></h6>
</div>
<a href="/RoomsPage" class=" view-detail-btn">View Details <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
</div>
</div>
</div>
<div class="col-12 col-lg-8">

<div class="single-room-area d-flex align-items-center mb-6">

<div class="room-thumbnail">
<img src="https://preview.colorlib.com/theme/roberto/img/bg-img/47.jpg.webp" alt=""/>
</div>

<div class="room-content">
<h2>Royal Room</h2>
<h4>400$ <span>/ Day</span></h4>
<div class="room-feature">
<h6>Size: <span>30 ft</span></h6>
<h6>Capacity: <span>Max persion 5</span></h6>
<h6>Bed: <span>King beds</span></h6>
<h6>Services: <span>Wifi, television ...</span></h6>
</div>
<a href="/RoomsPage" class=" view-detail-btn">View Details <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
</div>
</div>
</div>
<div class="col-12 col-lg-8">

<div class="single-room-area d-flex align-items-center mb-6">

<div class="room-thumbnail">
<img src="https://preview.colorlib.com/theme/roberto/img/bg-img/2.jpg.webp" alt=""/>
</div>

<div class="room-content">
<h2>Simple Room</h2>
<h4>400$ <span>/ Day</span></h4>
<div class="room-feature">
<h6>Size: <span>30 ft</span></h6>
<h6>Capacity: <span>Max persion 5</span></h6>
<h6>Bed: <span>King beds</span></h6>
<h6>Services: <span>Wifi, television ...</span></h6>
</div>
<a href="/RoomsPage" class=" view-detail-btn">View Details <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
</div>

</div>
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link active" href="#">1</a></li>
    <li class="page-item " aria-current="page">
      <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
</div>
<div class="col-12 col-lg-4">

  
<div class="hotel-reservation--area mb-100 silvaaaaa">
<form action="#" method="post">
<div class="form-group mb-30">
<label for="checkInDate">Date</label>
<div class="input-daterange" >
<div class="row no-gutters">
<div className='maininp'>
<input type="text" class="input-small form-control" id="checkInDate" name="checkInDate" placeholder="Check In"/>
<input type="text" class="input-small form-control" id="checkInDate" name="checkOutDate" placeholder="Check Out"/>
</div>
</div>
</div>
</div>
<div class="form-group mb-30">
<label for="guests">Guests</label>
<div class="row">
<div class="col-6">
<select name="adults" class="form-control">
<option value="adults">Adults</option>
<option value="01">01</option>
<option value="02">02</option>
<option value="03">03</option>
<option value="04">04</option>
<option value="05">05</option>
<option value="06">06</option>
</select>
</div>
<div class="col-6">
<select name="children" id="children" class="form-control">
<option value="children">Children</option>
<option value="01">01</option>
<option value="02">02</option>
<option value="03">03</option>
<option value="04">04</option>
<option value="05">05</option>
<option value="06">06</option>
</select>
</div>
</div>
</div>
<br/>
<div class="range-price">Max Price: ${data}- $3000</div>
<h1>{emoji}</h1>
            <input className={data>2000?'heigh':'less'} type="range" min="0" max="3000" step="50" value={data} onChange={(e)=>setData(e.target.value)} />
           
</form>
</div>




</div>
</div>
</div>

<BackToUp/>
<Footer/>
    </div>
  )
}

export default Shop