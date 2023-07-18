import React from 'react'
import "./Services.css"
import { Fade, Zoom } from 'react-reveal';
import Service from '../../Components/AllComponent/Service/Service';

const Services = () => {
    const data = [
        {id : 1 ,path: "/Etudes", iconClass : "fa-solid fa-graduation-cap" , title : "Etudes et Ingénierie"},
        {id : 2 ,path: "/formation", iconClass : "fa-solid fa-list" , title : "Formation"},
        {id : 3 ,path: "/Acompagnement", iconClass : "fa-solid fa-check" , title : "Accompagnement , conseil"},
        {id : 4 ,path: "/Development", iconClass : "fa-solid fa-code" , title : "Dévelopment informatiques"},
    ]
  return (
    <div className='Services' id="services">
        <Fade bottom cascade>
            <h1 className='title'>Services</h1>
            <p className="title title-5">Nos services Inclus Dans le suivi, Formation ,Ingénierie et accompagnement </p>
        </Fade>
            <div className='boxes'>
        <Fade cascade bottom>
                    { data.map( service => 
                        ( <Service
                            key={service.id} 
                            iconClass={service.iconClass} 
                            title={service.title} 
                            path={service.path} />)
                    )}
        </Fade>
            </div>
    </div>
  )
}

export default Services