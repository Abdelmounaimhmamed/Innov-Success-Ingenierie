import React from 'react'
import "./Projet.css";
import { Fade } from 'react-reveal';



const Projet = () => {
  return (
    <div className='Projets' id="projet">
         <Fade bottom duration={1200} cascade>
                 <div className=''>
                     <h2 className='title'>Projets </h2>
                     <p className='title title-1'>Projets et Mission realises avec notre clients </p>
                 </div>
         </Fade>
         <Fade bottom cascade>
                 <div className='projets-boxes'>
                         <div className="proj-i">
                             <img src="innov.jpg" alt="" className="image" />
                         </div>
                         <div className="proj-i">
                             <img src="innov.jpg" alt="" className="image" />
                         </div>
                 </div>
         </Fade>
     </div>

  
  )
}

export default Projet