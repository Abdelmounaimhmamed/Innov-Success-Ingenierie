import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import "./Details.css";
import { Fade, Zoom } from 'react-reveal';

const Details = ({title , image , paragraph}) => {
  const data = paragraph.split("  ");
  
  return (
    <>
        <NavBar />
        <Zoom bottom duration={1000}>
            <h1 className='title title-4'>{title} </h1>
        </Zoom>
        <div className='sections'>
          <div className='details'>
            <Fade bottom  cascade>
              <div className=''>
                  <img className='image-details' src={`${image}`} alt='' />
              </div>
              <h3 className='title-3 mt-3 title-7 '>Presentation</h3>
              <p className='parag'>
                {
                  data.map( par => ( <p> {par}</p>))

                }
              </p>
              <a href='/' className='btn btn-primary btn-lg '>Acceuil</a>
            </Fade>
          </div>
          <div className="helps">
            <h1 className='title'>Services</h1>
            <div className="help-1">
              <a className='btn' href="/Etudes">Etudes et Ingenirie</a>
              <a className='btn' href="/formation">Formation</a>
              <a className='btn' href="/Acompagnement">Accomapgnement et conseil</a>
              <a className='btn' href="/Development">Development informatiques</a>
            </div>
          </div>
        </div>



        <Footer />
    </>
  )
}

export default Details