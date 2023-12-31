

import React, { useEffect } from 'react';
import './Header.css';
import { TypeAnimation } from 'react-type-animation';
import { Zoom } from 'react-reveal';
import { toast } from 'react-toastify';

const Header = () => {
    useEffect( () => {
        toast("Bonjour Mme/Monsieur");
    },[]);


  const src = "https://images.pexels.com/photos/13787809/pexels-photo-13787809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  return (
    <div className='header'>
        <img className='header-image' src={src} alt="" />
        <div className='balck'></div>
        <div className='some-data'>
          <Zoom bottom>
            <div className="title-6 ">Innov Success Ingénierie - ISI</div>

            <TypeAnimation
                sequence={[
                  "Etudes et Ingénierie",
                  1000,
                  "Entreprise D'Accompagnement , Conseil",
                  1000, 
                  "Entreprise De Dévelopement Informatiques",
                  1000,
                  "Entreprise de Formation",
                  1000,
                  "Le pouvoir D'innover Et De Prospérer"
             ]}
              wrapper="span"
              speed={10}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </Zoom>
          
          <Zoom  bottom duration={1600}>
              <div id="wrapper">
                  <a href="#contact" class="my-super-cool-btn">
                    <div class="dots-container">
                      <div class="dot"></div>
                      <div class="dot"></div>
                      <div class="dot"></div>
                      <div class="dot"></div>
                    </div>
                    <span>Start!</span>
                  </a>
              </div>
          </Zoom>
            {/* <a href='#contact' className='btn btn-1'> Commencer </a> */}
        </div>
    </div>
  )
}

export default Header