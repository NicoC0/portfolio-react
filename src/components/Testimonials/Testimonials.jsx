import React from 'react'
import './testimonials.css'
import { testimonials } from '../../constants/testimonials'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reseñas de clientes</h5>
      <h2>Valoraciones</h2>

      <div className="container testimonials__container">
        {
          testimonials.map(({ name, image, review  }, index) => {
            return(
              <article key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={image} alt={name} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">
                  {review}
                </small>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials