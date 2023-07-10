import React, { useState } from 'react'
import {Fade, Zoom} from "react-reveal";
import './NavBar.css';

const NavBar = () => {

    const [open,setOpen] = useState(true);
    const click = () => {
        document.getElementById("data-1").style.left = 0;
        document.getElementById("data").style.display = "none";
        document.getElementById("croix").style.display = "block" ;
    }
    const hide = () => {
        document.getElementById("data-1").style.left = "-100%";
        document.getElementById("data").style.display = "block";
        document.getElementById("croix").style.display = "none";
    }

  return (
    <>
    <div className="container">
        <Fade left cascade>
            <div className='logo'>
                <img className='logo-image' src='dark_transparent.png' alt=' ' />
            </div>
        </Fade>
        {
            open === true ? (  <i class="fa-solid fa-bars" onClick={() => setOpen(false)} ></i>) : (<h1></h1>)
        }

        <ul className='items'>
         <Zoom bottom cascade>
                <li><a  href="/">Accueil</a></li>
                <li><a  href="#about">Qui somme nous ?</a></li>
                <li><a  href="#services">Services</a></li>
                <li><a  href="#projet">Projets</a></li>
                <li><a  href="#contact">Contact</a></li>
         </Zoom>
        </ul>
    </div>
    {
        open === false ? (
        <Fade left cascade>
            <div className="como">
            <i class="fa-solid fa-xmark" onClick={() => setOpen(true)}></i>
                <Zoom bottom cascade>
                <ul className='items-1'>
                        <li><a onClick={() => setOpen(true)} href="#">Accueil</a></li>
                        <li><a onClick={() => setOpen(true)} href="#about">Qui somme nous ?</a></li>
                        <li><a onClick={() => setOpen(true)} href="#services">Services</a></li>
                        <li><a onClick={() => setOpen(true)} href="#">Actualité</a></li>
                        <li><a onClick={() => setOpen(true)} href="#">Projets</a></li>
                        <li><a onClick={() => setOpen(true)} href="#contact">Contact</a></li>
                </ul>
                </Zoom>
            </div>
        </Fade>
        ) : (
            <p></p>
        )
    }
    </>
    
  )
}

export default NavBar