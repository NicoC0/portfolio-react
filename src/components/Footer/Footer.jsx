import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href="#">Inicio</a></li>
        <li><a href="#about">Sobre mi</a></li>
        <li><a href="#experiencie">Mi experiencia</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Valoraciones</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className="footer__copyright">
        <small>&copy; Nicolás Confalonieri. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer