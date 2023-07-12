import React from 'react'
import "./Projet.css";
import { Fade } from 'react-reveal';
import Projets from '../../Components/Projects/Projets';



const Projet = () => {
    const projets = [
        {id :  1 , src:"innov.jpg" },
        {id :  2 , src:"pexel.jpeg" },
        {id :  3 , src:"https://images.pexels.com/photos/3184427/pexels-photo-3184427.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" }
    ]
  return (
    <div className='Projets' id="projet">
         <Fade bottom duration={1200} cascade>
                 <div className=''>
                     <h2 className='title'>Projets </h2>
                     <p className='title title-5'>Projets et Mission realises avec notre clients </p>
                     <Fade bottom cascade duration={1200}>
                        <div className='btns'>
                            <p className='btn btn-primary btn-lg'>Developement</p>
                            <p className='btn btn-primary btn-lg'>Conseil</p>
                            <p className='btn btn-primary btn-lg'>Ingenierie</p>
                            <p className='btn btn-primary btn-lg'>Formation</p>
                        </div>
                     </Fade>
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