import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import "./Details.css";
import { Fade, Zoom } from 'react-reveal';

const Details = ({title , image , paragraph}) => {
  return (
    <>
        <NavBar />
        <Zoom bottom duration={1000}>
            <h1 className='title title-4'>{title} </h1>
        </Zoom>
        <div className='details'>
          <Fade bottom  cascade>
            <div className=''>
                <img className='image-details' src={`${image}`} alt='' />
            </div>
            <p className='parag'>
              {paragraph}
            </p>
            <a href='/' className='btn btn-1 btn-2'>Acceuil</a>
          </Fade>
        </div>


        <Footer />
    </>
  )
}

export default Details