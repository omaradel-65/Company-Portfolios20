import React from 'react'
import './App.css'
import "./styles.scss";
import Footer from './footer'
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
import BackToUp from './BackToUp'
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
import Headers from './header'
const Home = () => {
  return (
    <div>
    <section className='sceet1'>
    <Headers/>
    <Fade bottom cascade>
<div className='bordarsem'>
    <span className='bordeer1'></span> <span className='ouuur'>OUR SERVICES For</span> <span className='bordeer2'></span>
</div>
<h1 className='secit1'>The Smartest way to buy a home</h1>

<div className='maintext row'>
<div className='anas col-xl-3 col-lg-3 col-sm-12 col-md-3'>
<i  className="fa-solid fa-piggy-bank"></i>

<h3>No Downpayment</h3>
<p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
</div>

<div className='anas col-xl-3 col-lg-3 col-sm-12 col-md-3'>
<i className="fa-solid fa-wallet "></i>

<h3>All Cash Offer</h3>
<p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
</div>

<div className='anas col-xl-3 col-lg-3 col-sm-12 col-md-3'>
<i className="fa-solid fa-file-lines "></i>

<h3>Experts in Your Corner</h3>
<p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
</div>

<div className='anas col-xl-3 col-lg-3 col-sm-12 col-md-3'>
<i className="fa-solid fa-lock "></i>

<h3>Lokced in Pricing</h3>
<p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
</div>

</div>
</Fade>
    </section>
    <section className='sceet2'>
    <Fade right>

</Fade>

<br />
<br />
<Fade bottom>
  <div className='aaaa'>
<h1  className='secit1' >Exclusive Offer For You</h1>
<div className="container-fluid">
<div className='cardsee row'>
<Fade left>
</Fade> 
  <div className="wrapper col-xl-4 col-lg-4 col-sm-12 col-md-4" >
  <img className='cardww' src="https://preview.colorlib.com/theme/uptown/images/work-1.jpg.webp" alt="image"/>
  <div className="caption">
    <h1 className='cardtext'>The Blue Sky Home</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis illum maxime ipsam repellat iusto.</p>
  </div>
</div>

<div className="wrapper col-xl-4 col-lg-4 col-sm-12 col-md-4">
  <img className='cardww' src="https://preview.colorlib.com/theme/uptown/images/work-2.jpg.webp" alt="image"/>
  <div className="caption">
    <h1 className='cardtext'>The Blue Sky Home</h1>
    <h3></h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis illum maxime ipsam repellat iusto.</p>
  </div>
</div>
<div className="wrapper col-xl-4 col-lg-4 col-sm-12 col-md-4">
  <img className='cardww' src="https://preview.colorlib.com/theme/uptown/images/work-3.jpg.webp" alt="image"/>
  <div className="caption">
    <h1 className='cardtext'>The Blue Sky Home</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis illum maxime ipsam repellat iusto.</p>
  </div>
</div>
</div>
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
<div className='row'>

<div className="about-section col-sm-12">
  <Flash>
        <div className="inner-container col-xl-6 col-sm-12">
            <h1>We Put People First.</h1>
            <p className="text">
            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.
            </p>
            <div className="skills col-xl-6 col-sm-12">
                <span>Web Design</span>
                <span>Photoshop & Illustrator</span>
                <span>Coding</span>
            </div>
        </div></Flash>
    </div>
    </div>
  

<div className="testimonials">
<div className='bordarsem3'>
    <span className='bordeer7'></span> <span className='ouuur3'>Happy Clients</span> <span className='bordeer8'></span>

</div>

        <div className="test-body">
          <Slide left>
            <div className="item">
                <img src="https://preview.colorlib.com/theme/uptown/images/person_3.jpg.webp"/>
                <div className="name">Matthew Perkins</div>
                <small className="desig">Driver</small>
                <p>Just had my laptop resurrected and the engineer was fantastic. Very patient, very knowledgeable and knew exactly what he was doing. If I ever have another computer problem, I'll definitely give these guys a call. They are professionals and they have great customer service. Great price, great job, thanks a lot!</p>
            </div>    
            </Slide>
            <Slide bottom>


            <div className="item">
                <img src="https://preview.colorlib.com/theme/uptown/images/person_1.jpg.webp"/>
                <div className="name">Elizabeth Johnson</div>
                <small className="desig">Real Estate agent</small>
                
                <p>My friend recommended Repair & Fix to me when I had some issues with my laptop. I contacted them and they were very understanding, helpful and prompt with dealing with my requirements. Your consultants were happy to talk me through everything during the first consultation. Thank you!</p>
            </div>
            </Slide>
            <Slide right>


            <div className="item">
                <img src="https://preview.colorlib.com/theme/uptown/images/person_2.jpg.webp"/>
                <div className="name">Walter Knight</div>
                <small className="desig">Photographer</small>
                <p>I have worked with Repair & Fix for several years. They re-built a computer for me and later upgraded it and now it feels just like a new one. The value, quality, and follow-up are outstanding. I highly recommend this company, their professionalism and customer care are unmatched.</p>
            </div></Slide>
        </div>
      
    </div>
   
    <div className='bordarsem4'>
    <span className='bordeer11'></span> <span className='ouuur4'>Agents</span> <span className='bordeer12'></span>

</div> 
<h1 className='secit1'>Our Agents</h1> 
    <div className="divlargermin row">
            <div   className=" uimggdiv1 col-xl-3 col-lg-3 col-sm-12 col-md-3 mb-4">
                <img src="https://preview.colorlib.com/theme/uptown/images/team-1.jpg.webp" alt=""/>
                <h1>James Stallon</h1>
                <h3>Listing-10 Properties</h3>
                
            </div>
            <div className="uimggdiv2  col-xl-3 col-lg-3 col-sm-12 col-md-3 mb-4">
                <img src="https://preview.colorlib.com/theme/uptown/images/team-2.jpg.webp" alt=""/>
                <h1>James Stallon</h1>
                <h3>Listing-10 Properties</h3>
            </div>
            <div className="uimggdiv3  col-xl-3 col-lg-3 col-sm-12 col-md-3 mb-4">
                <img src="https://preview.colorlib.com/theme/uptown/images/team-3.jpg.webp" alt=""/>
                <h1>James Stallon</h1>
                <h3>Listing-10 Properties</h3>
            </div>
            <div className="uimggdiv3   col-xl-3 col-lg-3 col-sm-12 col-md-3 mb-4" >
                <img src="https://preview.colorlib.com/theme/uptown/images/team-4.jpg.webp" alt=""/>
                <h1>James Stallon</h1>
                <h3>Listing-10 Properties</h3>
            </div>
        </div>
        <Fade bottom>
        <div className='bordarsem5'>
    <span className='bordeer11'></span> <span className='ouuur4'>Blog</span> <span className='bordeer12'></span>
    <h1 className='secit1 moors'>BLOG</h1>
</div>

        <div className='mainblog row'>
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
    </section>
     <BackToUp/>
    </div>
  )
}

export default Home