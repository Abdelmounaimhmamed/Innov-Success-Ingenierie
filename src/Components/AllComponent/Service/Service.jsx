

import React from 'react'
import { Fade, Zoom } from 'react-reveal'

const Service = ({iconClass,title,path}) => {
  return (
    <Zoom bottom   duration={1200}>
          <div className="box">
              <i className={iconClass}></i>
              <a href={path}><h3>{title}</h3></a>
          </div>
    </Zoom>
  )
}

export default Service