

import React from 'react'

const Service = ({iconClass,title,path}) => {
  return (
    <div>
        <div className="box">
            <i className={iconClass}></i>
            <a href={path}><h3>{title}</h3></a>
        </div>
    </div>
  )
}

export default Service