import React from 'react'
import "./Services.css"
import { Fade, Zoom } from 'react-reveal'

const Services = () => {
  return (
    <div className='Services' id="services">
        <Fade bottom cascade>
        <h1 className='title'>Services</h1>
        <p className='title title-1'>Nos services Inclus Dans le suivi ,Ingenirie et accompagnement </p>
        </Fade>
            <Zoom cascade bottom>
        <div className='boxes'>
                <div className="box">
                    <i class="fa-solid fa-graduation-cap"></i>
                    <a href='/Etudes' ><h3>Etudes et Ingenierie</h3></a>
                </div>
                <div className="box">
                    <i class="fa-solid fa-list"></i>
                    <a href='/formation'><h3>Formation</h3></a>

                </div>
                <div className="box">
                    <i class="fa-solid fa-check"></i>
                    <a href='/Acompagnement'> <h3>Acompagnement , conseil</h3></a>
                   

                </div>
                <div className="box">
                    <i class="fa-solid fa-code"></i>
                    <a href="/Development"><h3>Development informatiques</h3></a>
                </div>
        </div>
            </Zoom>
    </div>
  )
}

export default Services