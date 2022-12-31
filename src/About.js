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
const About = () => {
  return (
    <div>
    <section  >
<Zoom left>

<div className='head-_-00'>

   <p className='head--0 '  >Home/About</p>
<h1 className='head-1' >About</h1>

</div>
</Zoom>
<div className='imga'>
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Chicago_Money_%2851293592769%29.jpg" alt="" />
  </div>
  <div className='row'>

<div class="about-section col-sm-12">
  <Flash>
        <div class="inner-container col-xl-6 col-sm-12">
            <h1>We Put People First.</h1>
            <p class="text">
            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.
            </p>
            <div class="skills col-xl-6 col-sm-12">
                <span>Web Design</span>
                <span>Photoshop & Illustrator</span>
                <span>Coding</span>
            </div>
        </div></Flash>
    </div>
    </div>
    <div class="testimonials">
<div className='bordarsem3'>
    <span className='bordeer7'></span> <span className='ouuur3'>Happy Clients</span> <span className='bordeer8'></span>

</div>
        <div class="test-body">
            <div class="item">
                <img src="https://preview.colorlib.com/theme/uptown/images/person_3.jpg.webp"/>
                <div class="name">Matthew Perkins</div>
                <small class="desig">Driver</small>
                <p>Just had my laptop resurrected and the engineer was fantastic. Very patient, very knowledgeable and knew exactly what he was doing. If I ever have another computer problem, I'll definitely give these guys a call. They are professionals and they have great customer service. Great price, great job, thanks a lot!</p>
            </div>
            <div class="item">
                <img src="https://preview.colorlib.com/theme/uptown/images/person_1.jpg.webp"/>
                <div class="name">Elizabeth Johnson</div>
                <small class="desig">Real Estate agent</small>
                
                <p>My friend recommended Repair & Fix to me when I had some issues with my laptop. I contacted them and they were very understanding, helpful and prompt with dealing with my requirements. Your consultants were happy to talk me through everything during the first consultation. Thank you!</p>
            </div>
            <div class="item">
                <img src="https://preview.colorlib.com/theme/uptown/images/person_2.jpg.webp"/>
                <div class="name">Walter Knight</div>
                <small class="desig">Photographer</small>
                <p>I have worked with Repair & Fix for several years. They re-built a computer for me and later upgraded it and now it feels just like a new one. The value, quality, and follow-up are outstanding. I highly recommend this company, their professionalism and customer care are unmatched.</p>
            </div>
        </div>
        </div>
        <Footer/>
</section>
<BackToUp/>
    </div>
  )
}

export default About