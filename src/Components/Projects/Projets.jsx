

import React from 'react'
import { Zoom } from 'react-reveal'

const Projets= ({src}) => {
  return (
    <>
    <Zoom bottom   duration={1200}>
        <div className="proj-i">
                <div className="proj-j">
                    <img src={src} alt="image" className="image" />
                    <div className="btns d-flex flex-column ">
                    <p className='title-5 mt-2 text-center'>Competence de Demain</p>
                        <button type='' className='btn btn-primary btn-lg fw-bold rounded-1 '>Consulter</button>
                    </div>
                </div>
        </div>
    </Zoom>
    </>
  )
}

export default Projets