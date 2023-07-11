import React from 'react'
import "./Projet.css";
import { Fade } from 'react-reveal';
import Projets from '../../Components/Projects/Projets';



const Projet = () => {
    const projets = [
        {id :  1 , src:"innov.jpg" },
        {id :  2 , src:"pexel.jpeg" },
    ]
  return (
    <div className='Projets' id="projet">
         <Fade bottom duration={1200} cascade>
                 <div className=''>
                     <h2 className='title'>Projets </h2>
                     <p className='title title-5'>Projets et Mission realises avec notre clients </p>
                 </div>
         </Fade>
         <Fade bottom cascade>
                <div className='projets-boxes'>
                        {projets.map( (proj) =>  
                            (<Projets  key={proj.id} src={proj.src} />)
                        )}
                </div>
         </Fade>
     </div>

  )
}

export default Projet