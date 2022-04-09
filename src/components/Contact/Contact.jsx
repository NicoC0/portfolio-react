import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { RiMessengerLine } from 'react-icons/ri'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Hablemos</h5>
      <h2>Contactame</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>nicoconfaa@gmail.com</h5>
            <a href="mailto:nicoconfaa@gmail.com" target='_blank'>Enviar un mensaje</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>3456 000000</h5>
            <a href="https://api.whatsapp.com/send?phone=540000000000" target='_blank'>Enviar un mensaje</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>nicoconfaa@gmail.com</h5>
            <a href="https://m.me/" target='_blank'>Enviar un mensaje</a>
          </article>
        </div>

          <form action="">
            <input type='text' name='name' placeholder='Tu nombre completo' required />
            <input type='text' name='email' placeholder='Tu email' required />
            <textarea name='message' rows='7' placeholder='Tu mensaje' required></textarea>
            <button type='submit' className='btn btn-primary'>Enviar mensaje</button>
          </form>
      </div>
    </section >
  )
}

export default Contact