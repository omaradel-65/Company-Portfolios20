import React from 'react'
import { useState, useEffect } from "react";
function BackToUp() {

    const [backToTopButton, setBackToTopButton] = useState(false);


    useEffect(() => {
      window.addEventListener("scroll", () =>{
        if(window.scrollY > 300) {
          setBackToTopButton(true)
         } else {
          setBackToTopButton(false)
        }
    })
    }, [])

    const scrollUp = () => {

        window.scrollTo({
        top: 0,
        behavior: "smooth"
        })
        
        }

  return (
    <div>
    {backToTopButton && (
<a style={{
position: "fixed",
bottom: "50px",
right: "50px",
height: "50px",
width: "50px",
fontSize: "50px",
color: "red"
}}
onClick={scrollUp}
><i class="fa-solid fa-circle scrolcir"></i></a>
    )}

    </div>
  )
}

export default BackToUp