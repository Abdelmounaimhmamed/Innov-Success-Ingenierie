import React from 'react'
import "./About.css";
import { Fade, Zoom } from 'react-reveal';

const About = () => {
  return (
    <>
      <Fade bottom >
          <h1 className='title'>Qui somme nous ?</h1>
      </Fade>
    <div className='About' id="about">
        <div className='sub-about'>
          <Zoom bottom >
              <img src="in.jpg" alt="" className='image-3' />
          </Zoom>
          <Fade right cascade>
              <div className='parg-btn'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Reiciendis tempore non magnam provident nostrum, tenetur 
                  fugit consequuntur dolor dicta libero saepe nemo culpa vel, 
                  architecto nam necessitatibus doloribus. Velit commodi eos  
                  debitis repellendus inventore repellat a dicta rem dignissimos quisquam!
                </p>
                <button type='button'>Get Started </button>
              </div>
          </Fade>
        </div>
    </div>
    </>
  )
}

export default About