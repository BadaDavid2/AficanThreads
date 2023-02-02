import React from 'react'
import {FaFacebook, FaInstagram, FaPinterest, FaWhatsapp, FaGithub} from 'react-icons/fa'
const Contact = () => {
  return (
    <>
     <section className="contact-section" id='contact'>
        <p className="section-header">contact</p>
        <div className="container">
        <div className="section-form">
          <form action="" method="post">
            <div className="form-flex">
              <input type="text" placeholder='Your Names' />
              <input type="text" placeholder='other Names' />
            </div>
            <input type="text" placeholder='Message Title' />
            <textarea name="" placeholder='message' id="" cols="20" rows="20"></textarea>
            <button>send</button>
          </form>
        </div>
        <div className="section-text">
          <h1>Get In Touch</h1>
          <p>
          If you have any questions or concerns, please don't hesitate to reach out to us.
          </p>
          <div className="icons">
            <FaFacebook/>
            <FaInstagram/>
            <FaPinterest/>
            <FaWhatsapp/>
          </div>
        </div>
        </div>
     </section>
     <footer>
      <a href="https://github.com/BadaDavid2" target="_blank" rel="noopener noreferrer">
      <FaGithub/>
      </a>
      <a href="https://github.com/BadaDavid2" target="_blank" rel="noopener noreferrer">Bada O. David</a>
     </footer>
    </>
  )
}

export default Contact
