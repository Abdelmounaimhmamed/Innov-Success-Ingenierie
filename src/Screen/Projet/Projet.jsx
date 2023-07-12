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
                     <div className='btns'>
                        <p className='btn btn-primary btn-lg'>Developement</p>
                        <p className='btn btn-primary btn-lg'>Conseil</p>
                        <p className='btn btn-primary btn-lg'>Ingenierie</p>
                        <p className='btn btn-primary btn-lg'>Formation</p>
                     </div>
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