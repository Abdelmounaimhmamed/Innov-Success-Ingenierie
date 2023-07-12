import React from 'react'
import "./About.css";
import { Fade, Zoom } from 'react-reveal';

const About = () => {
  return (
    <>
      
    <div className='About' id="about">
          <Fade bottom >
                <h1 className='title'>Qui somme nous ?</h1>
            </Fade>
        <div className='sub-about'>
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
                {/* <a href="#contact" className='btn btn-primary btn-lg start'>Commencer</a> */}
              </div>
          </Fade>

          <div className='data-1'>
            <Zoom bottom >
                <img src="https://images.pexels.com/photos/7993907/pexels-photo-7993907.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className='image-3' />
                <div className='sub-data-1'>
                  <h3>-Innov Success Ingenierie -ISI-</h3>
                  <p>Accompagnemant - formation - Etudes</p>
                </div>
            </Zoom>
          </div>
        </div>
    </div>
    </>
  )
}

export default About