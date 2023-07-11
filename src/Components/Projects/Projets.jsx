

import React from 'react'

const Projets= ({src}) => {
  return (
    <>
        <div className="proj-i">
                <div className="proj-j">
                    <img src={src} alt="image" className="image" />
                    <p className='title-5 mt-2 text-center'>Competence de Demain</p>
                    <div className="btns d-flex ">
                        <button type='' className='btn btn-primary btn-lg fw-bold '>Consulter</button>
                    </div>
                </div>
        </div>

    </>
  )
}

export default Projets