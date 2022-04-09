import React from 'react'
import './testimonials.css'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reseñas de clientes</h5>
      <h2>Valoraciones</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src="" alt="" />
          </div>
          <h5 className='client__name'>Nombre</h5>
          <small className="client__review">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam laboriosam velit eligendi natus provident, accusamus sunt culpa officiis doloremque facere veritatis eum, repellat maiores illo adipisci at praesentium consequatur obcaecati.
          </small>
        </article>
      </div>
    </section>
  )
}

export default Testimonials