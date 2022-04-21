import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
  
    emailjs.sendForm('service_oj10nbt', 'template_97x27z6', form.current, 'aXXLArOJpeacenvAU')
    e.target.reset()
  }

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
        </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Tu nombre completo' required />
            <input type='text' name='email' placeholder='Tu email' required />
            <textarea name='message' rows='7' placeholder='Tu mensaje' required></textarea>
            <button type='submit' value='send' className='btn btn-primary'>Enviar mensaje</button>
          </form>
      </div>
    </section >
  )
}

export default Contact