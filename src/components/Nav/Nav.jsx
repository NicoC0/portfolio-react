import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { CgUserAdd } from 'react-icons/cg'
import { BiBook } from 'react-icons/bi'
import { MdDesignServices } from 'react-icons/md'
import { SiMinutemailer } from 'react-icons/si'

const Nav = () => {
  return (
    <nav>
      <a href="#" className='active'><AiOutlineHome /></a>
      <a href="#about"><CgUserAdd /></a>
      <a href="#experiencie"><BiBook /></a>
      <a href="#services"><MdDesignServices /></a>
      <a href="#contact"><SiMinutemailer /></a>
    </nav>
  )
}

export default Nav