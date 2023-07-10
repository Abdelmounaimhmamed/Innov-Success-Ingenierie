import React from 'react'
import NavBar from '../../Screen/NavBar/NavBar'
import Header from '../../Screen/Header/Header'
import About from '../../Screen/About/About'
import Services from '../../Screen/Services/Services'
import Projet from '../../Screen/Projet/Projet'
import Contact from '../../Screen/Contact/Contact'
import Footer from '../../Screen/Footer/Footer'


const AllComponent = () => {
  return (
    <div>

        <NavBar /> 
        <Header />
        <About /> 
        <Services />  
        <Projet />
        <Contact />  
        <Footer /> 

    </div>
  )
}

export default AllComponent