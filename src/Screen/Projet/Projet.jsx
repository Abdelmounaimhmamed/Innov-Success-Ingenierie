import React from 'react'
import "./Projet.css";
import { Fade } from 'react-reveal';
import Projets from '../../Components/Projects/Projets';



const Projet = () => {
    const projets = [
        {id :  1 ,type : "Dévelopement", title : "Compétence de demain" , src:"innov.jpg" },
        {id :  2 ,type : "Formation", title : "Formation à l'offpt" , src:"offpt.jpeg" },
        {id :  3 ,type : "Accompagnement", title : "Société Frère Énergie" , src:"fre.jpeg" },
    ]
  return (
    <div className='Projets' id="projet">
         <Fade bottom duration={1200} cascade>
                 <div className=''>
                     <h2 className='title'>Projets </h2>
                     <p className='title title-5'>Projets et missions réalisés avec nos clients. </p>
                     <Fade bottom cascade duration={1200}>
                        <div className='btns btns-2'>
                            <p className='btn btn-primary btn-lg'>Developement</p>
                            <p className='btn btn-primary btn-lg'>Etudes</p>
                            <p className='btn btn-primary btn-lg'>Ingenierie</p>
                            <p className='btn btn-primary btn-lg'>Formation</p>
                        </div>
                     </Fade>
                 </div>
         </Fade>
         <Fade bottom cascade>
                <div className='projets-boxes'>
                        {projets.map( (proj) =>  
                            (<Projets type={proj.type} title={proj.title} key={proj.id} src={proj.src} />)
                            )}
                </div>
         </Fade>
     </div>

  )
}

export default Projet