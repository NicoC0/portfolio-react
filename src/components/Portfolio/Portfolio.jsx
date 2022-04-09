import React from 'react'
import './portfolio.css'
import { projects } from '../../constants/constants'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mis proyectos</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          projects.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className = "portfolio__item-btns">
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary'>Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section >
  )
}

export default Portfolio