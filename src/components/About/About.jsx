import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderOpened } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Conozca</h5>
      <h2>Sobre mí</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Nicolás Confalonieri" />
          </div>
        </div>

        <div className="about__content">
          <div className='about__cards'>
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experiencia</h5>
              <small>1 año de experiencia</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>+5 clientes</small>
            </article>

            <article className="about__card">
              <VscFolderOpened className='about__icon'/>
              <h5>Proyectos</h5>
              <small>+5 proyectos</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi explicabo debitis similique expedita quaerat tenetur, magni velit voluptatibus, repellendus temporibus aspernatur non accusamus, pariatur nam natus. Distinctio omnis natus eos.
          </p>
          <a href="#contact" className='btn btn-primary'>Hablemos</a>
        </div>
      </div>
    </section>
  )
}

export default About