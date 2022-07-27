import React from 'react'
import "./contact.css"
import {useRef} from "react"
import emailjs from "emailjs-com"
import {SiWhatsapp} from "react-icons/si"
import {GrLinkedin} from "react-icons/gr"
import {MdEmail} from "react-icons/md"
//send email
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_in90ooo", "template_tbyiz7n", form.current, "G0lS5iaYtkRZ2n3f_")
      e.target.reset()
  };

  return (
    <div id="contact" class="contact">
      <h2>Contact Me</h2>
        
    <div className="contact-flex">     
    

        <form ref={form} onSubmit={sendEmail} className='form'>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" row="7" placeholder="Your Message" required></textarea>
          <button className="button-contact" type="submit">Send Message</button>
        </form>

        <div className='contact-container'>
      <div className='contact-links'>
          <a href="https://wa.link/qn1xsf" className='contact whatsapp'>
          <SiWhatsapp className="icon"/>
          <h2 className="ly">WhatsApp</h2>
          </a>
        </div>

        <div className='contact-links'>
          <a href="https://www.linkedin.com/in/maira-yulieth-rodriguez-santacruz/" className='contact whatsapp'>
          <GrLinkedin className="icon"/>
          <h2 className="ly">linkend</h2>
          </a>
        </div>

        <div className='contact-links'>
          <a href="mailto:mairaces91@gmail.com" className='contact whatsapp'>
          <MdEmail className="icon"/>
          <h2 className="ly">Email</h2>
          </a>
        </div>

      </div>
      </div> 
    </div>
  )
}

export default Contact