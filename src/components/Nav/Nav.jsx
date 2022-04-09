import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineStar } from 'react-icons/ai'
import { CgUserAdd } from 'react-icons/cg'
import { BiBook } from 'react-icons/bi'
import { SiMinutemailer } from 'react-icons/si'
import { VscFolderOpened } from 'react-icons/vsc'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className = { activeNav === '#about' ? 'active' : ''}><CgUserAdd /></a>
      <a href="#experiencie" onClick={() => setActiveNav('#experiencie')} className = { activeNav === '#experiencie' ? 'active' : '' } ><BiBook /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className = { activeNav === '#portfolio' ? 'active' : '' } ><VscFolderOpened /></a>
      <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className = { activeNav === '#testimonials' ? 'active' : '' } ><AiOutlineStar /></a>
      <a href="#contact" onClick = {() => setActiveNav('#contact')} className = { activeNav === '#contact' ? 'active' : ''}><SiMinutemailer /></a>
    </nav>
  )
}

export default Nav