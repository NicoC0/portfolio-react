import React from 'react'
import './experiencie.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experiencie = () => {
  return (
    <section id='experiencie'>
      <h5>¿Cuáles son mis skills?</h5>
      <h2>Mi experiencia</h2>
      <div className='container experiencie__container'>
        {/* Frontend */}
        <div className='experiencie__frontend'>
          <h3>Desarollo Front-end</h3>
          <div className='experiencie__content'>
            <article className='experiencie__details'>
              <BsPatchCheckFill className='experiencie__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Avanzado</small>
              </div>
            </article>
            <article className='experiencie__details'>
              <BsPatchCheckFill className='experiencie__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className='experiencie__details'>
              <BsPatchCheckFill className='experiencie__details-icon' />
              <div>
                <h4>SASS</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className='experiencie__details'>
              <BsPatchCheckFill className='experiencie__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            <article className='experiencie__details'>
              <BsPatchCheckFill className='experiencie__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className='experiencie__details'>
              <BsPatchCheckFill className='experiencie__details-icon' />
              <div>
                <h4>jQuery</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            <article className='experiencie__details'>
              <BsPatchCheckFill className='experiencie__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
          </div>
        </div>
        {/* Backend */}
        <div className="experience_backend">
        <h3>Desarrollo Back-end</h3>
          <div className='experiencie__content'>
            <article className='experiencie__details'>
              <BsPatchCheckFill className='experiencie__details-icon' />
              <div>
                <h4>Node</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            <article className='experiencie__details'>
              <BsPatchCheckFill className='experiencie__details-icon' />
              <div>
                <h4>Express</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            <article className='experiencie__details'>
              <BsPatchCheckFill className='experiencie__details-icon' />
              <div>
                <h4>Mysql</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            <article className='experiencie__details'>
              <BsPatchCheckFill className='experiencie__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            <article className='experiencie__details'>
              <BsPatchCheckFill className='experiencie__details-icon' />
              <div>
                <h4>Firebase</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            <article className='experiencie__details'>
              <BsPatchCheckFill className='experiencie__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            <article className='experiencie__details'>
              <BsPatchCheckFill className='experiencie__details-icon' />
              <div>
                <h4>Deno</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiencie