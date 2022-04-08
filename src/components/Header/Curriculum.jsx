import React from 'react'
import CV from '../../assets/cv-nicolas-confalonieri.pdf'

const Curriculum = () => {
  return (
    <div className="curriculum">
        <a href={CV} download className='btn'>Descargar CV</a>
        <a href="#contact" className="btn btn-primary">Charlemos</a>
    </div>
  )
}

export default Curriculum