import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { CgUserAdd } from 'react-icons/cg'
import { BiBook } from 'react-icons/bi'
import { MdDesignServices } from 'react-icons/md'
import { SiMinutemailer } from 'react-icons/si'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className = { activeNav === '#about' ? 'active' : ''}><CgUserAdd /></a>
      <a href="#experiencie" onClick={() => setActiveNav('#experiencie')} className = { activeNav === '#experiencie' ? 'active' : '' } ><BiBook /></a>
      <a href="#services" onClick = {() => setActiveNav('#services')} className = { activeNav === '#services' ? 'active' : ''}><MdDesignServices /></a>
      <a href="#contact" onClick = {() => setActiveNav('#contact')} className = { activeNav === '#contact' ? 'active' : ''}><SiMinutemailer /></a>
    </nav>
  )
}



export default Nav