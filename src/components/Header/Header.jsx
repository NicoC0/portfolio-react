import React from 'react'
import Curriculum from './Curriculum'
import './header.css'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>¡Hola! Soy</h5>
        <h1>Nicolás Confalonieri</h1>
        <h5 className='text-light'>Desarrollador Full Stack</h5>
        <Curriculum />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='Nicolás Confalonieri' />
        </div>

        <a href='#contact' className='scroll_down'> Scroll al final</a>
      </div>
    </header>
  )
}

export default Header