import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import "./Details.css";

const Details = ({title , image , paragraph}) => {
  return (
    <>
        <NavBar />
            <h1 className='title title-4'>{title} </h1>
        <div className='details'>
            <div className=''>
                <img className='image-details' src={`${image}`} alt='' />
            </div>
            <p className='parag'>
              {paragraph}
            </p>
            <a href='/' className='btn btn-1 btn-2'>Go Back</a>
        </div>
        <Footer />
    </>
  )
}

export default Details