

import React from 'react';
import './Header.css';
import { TypeAnimation } from 'react-type-animation';
import { Zoom } from 'react-reveal';

const Header = () => {
  const src = "https://images.pexels.com/photos/13787809/pexels-photo-13787809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  return (
    <div className='header'>
        <img className='header-image' src={src} alt="" />
        <div className='balck'></div>
        <div className='some-data'>
          <Zoom bottom>
            <div className="title title-3">Innov Success Ingeniérie - ISI</div>

            <TypeAnimation
                sequence={[
                  "Etudes et Ingénierie",
                  1000,
                  "Entreprise D'Accompagnement , conseil",
                  1000, 
                  "Entreprise de Dévelopment informatiques",
                  1000,
                  "Entreprise de formation",
                  1000,
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
                    <span>Go!</span>
                  </a>
              </div>
          </Zoom>
            {/* <a href='#contact' className='btn btn-1'> Commencer </a> */}
        </div>
    </div>
  )
}

export default Header