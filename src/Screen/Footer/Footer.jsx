
import React from 'react'
import "./Footer.css";
import { Fade, Zoom } from 'react-reveal';

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='blocs'>
            <Fade left cascade>
                <div className='bloc-1'>
                    {/* <img className='image-2' src="dark_transparent.svg" alt=''/> */}
                    <h1>INNOV SUCCESS INGENIERIE</h1>
                    <p >Entreprise d'ingénierie et d'accompagnement</p>
                </div>
            </Fade>
            <Zoom cascade bottom>
                <div className='bloc-1'>
                    <h1>Contactez-nous</h1>
                    <p><span >Email:</span> innovsuccessingenierie@gmail.com</p>
                    <p><span >GSM :</span> 0636731675</p>
                    <p><span >Adresse:</span> Khouribga Moulay abdelallah N° 99 </p>
                </div>
            </Zoom>
            <Fade right cascade>
                <div className='bloc-1'>
                    <h1>Réseaux Sociaux</h1>
                    <p>Facebook</p>
                    <p>twitter</p>
                    <p>Linkden</p>
                </div>
            </Fade>
        </div>
        <Zoom bottom cascade>
            <div className='copyright'>
                <h1>© Copyright 2023 Design by ISI</h1>
            </div>
        </Zoom>
    </div>
  )
}

export default Footer