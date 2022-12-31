import React from 'react'
import './App.css'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { BrowserRouter, Routes , Route ,Link} from 'react-router-dom'
const Nav = () => {

  

window.addEventListener("scroll", function(){
   var nav = document.querySelector("nav");
   nav.classList.toggle("sticky", window.scrollY > 600)
 } );

 let switcherLis = document.querySelectorAll(".switcher li");

 switcherLis.forEach((li) => {
   li.addEventListener("click", function(){
     switcherLis.forEach((li) => {
       li.classList.remove("active");
       this.classList.add("active");
     });
     });
 
 });


  return (
    <div>
       
       <nav class="navbar navbar-expand-lg wow animate__flipInX" id='naav'>
      <div class="container">
      <Link class="uppt floating-text" data-text="Uptown" to="/">Uptown <span class="sr-only">(current)</span></Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav switcher ml-auto">
            <li class="nav-item active p-2">
              <Link class="nav-link"  to="/">Home <span class="sr-only">(current)</span></Link>
            </li>        
              <li class="nav-item p-2">
            <Link class="nav-link"   to="/Shop">Rooms</Link>
            </li>
            <li class="nav-item p-2">
              <Link class="nav-link" id='navlinkk'  to="/About">About</Link>
            </li>
            <li class="nav-item p-2">
              <Link class="nav-link"    to="/Agent">Agent</Link>
            </li>
            <li class="nav-item p-2">
              <Link class="nav-link"   to="/Services">Services</Link>
            </li>
            <li class="nav-item p-2">
              <Link class="nav-link"   to="/Properties">Properties</Link>
            </li>

            <li class="nav-item p-2">
            <Link class="nav-link"   to="/Blog">Blog</Link>
            </li>
            <li class="nav-item p-2">
              <Link class="nav-link"  to="/Contact">Contact</Link>
            </li>
            
          </ul>
          
  
        </div>
      </div>
      </nav>
    </div>
  )
}

export default Nav