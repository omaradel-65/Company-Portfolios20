import React from 'react'
import './App.css'
import "./styles.scss";
import Footer from './footer'
import BackToUp from './BackToUp'
import { BrowserRouter, Routes , Route ,Link} from 'react-router-dom'
import Apps from './App'
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


function Properties() {



  return (
    <div>
        <Zoom left>

<div className='head-_-00'>

   <p className='head--0 '  >Home/Properties</p>
<h1 className='head-1' >Properties</h1>

</div>
</Zoom>
<div className='imga'>
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Chicago_Money_%2851293592769%29.jpg" alt="" />
  </div>
    
  
<div className='row maincardr'>
<div decoding="async" className="card all furniture  immc">
  <div className="card-body">
    <h2 className="card-title">The Blue Sky Home</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga placeat odio pariatur doloribus sint?</p>
    <a href="#" className="button">Learn more</a>
  </div>
</div>
<div decoding="async" className="card all furniture immc2">
  <div className="card-body">
    <h2 className="card-title">The Blue Sky Home</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga placeat odio pariatur doloribus sint?</p>
    <a href="#" className="button">Learn more</a>
  </div>
</div>
<div decoding="async" className="card all stairs immc3">
  <div className="card-body">
    <h2 className="card-title">The Blue Sky Home</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga placeat odio pariatur doloribus sint?</p>
    <a href="#" className="button">Learn more</a>
  </div>
</div>
</div>
<div className='row maincardr'>
<div decoding="async" className="card all stairs immc31">
  <div className="card-body">
    <h2 className="card-title">The Blue Sky Home</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga placeat odio pariatur doloribus sint?</p>
    <a href="#" className="button">Learn more</a>
  </div>
</div>
<div decoding="async" className="card all house immc4">
  <div className="card-body">
    <h2 className="card-title">The Blue Sky Home</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga placeat odio pariatur doloribus sint?</p>
    <a href="#" className="button">Learn more</a>
  </div>
</div>
<div decoding="async" className="card all stairs immc5">
  <div className="card-body">
    <h2 className="card-title">The Blue Sky Home</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga placeat odio pariatur doloribus sint?</p>
    <a href="#" className="button">Learn more</a>
  </div>
</div>
</div>
<div className='row maincardr'>
<div decoding="async" className="card all furniture immc6">
  <div className="card-body">
    <h2 className="card-title">The Blue Sky Home</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga placeat odio pariatur doloribus sint?</p>
    <a href="#" className="button">Learn more</a>
  </div>
</div>
<div decoding="async" className="card all house immc7">
  <div className="card-body">
    <h2 className="card-title">The Blue Sky Home</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga placeat odio pariatur doloribus sint?</p>
    <a href="#" className="button">Learn more</a>
  </div>
</div>
<div decoding="async" className="card all furniture immc8">
  <div className="card-body">
    <h2 className="card-title">The Blue Sky Home</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga placeat odio pariatur doloribus sint?</p>
    <a href="#" className="button">Learn more</a>
  </div>
</div>
</div>
<Footer/> 
<BackToUp/>
    </div>
    
  )
}

export default Properties