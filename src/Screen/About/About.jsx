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
                <p>Nous sommes une entreprise spécialisée dans la formation,
                  l'accompagnement et le conseil des entreprises en constante évolution.
                  Nous offrons des programmes de formation personnalisés pour renforcer
                  les compétences de votre équipe . Notre équipe de consultants
                  expérimentés fournit des conseils stratégiques pour des décisions
                  informatiques éclairées. Nous vous offrons également un accompagnement 
                  personnalisé pour optimiser vos processus et maximiser vos ressources .
                </p>
                <a href="#contact" className='btn btn-primary btn-lg start'>Commencer</a>
              </div>
          </Fade>
        </div>
    </div>
    </>
  )
}

export default About