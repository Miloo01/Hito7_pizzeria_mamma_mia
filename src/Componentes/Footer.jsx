import React from 'react'
import { FaRegCopyright, FaFacebook, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-dark text-white text-center p-3 ' style={{border: '2px solid rgba(255, 217, 0, 0.9)'}}>
        <div className='container'>
            <p className='mb-0'> 2024 Pizzería Mamma Mía. <FaRegCopyright /> Todos los derechos reservados.</p>
            <p>Contacto: <FaPhone /> +56 9 1234 5678 </p>
            <p>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2 fs-3">
              <FaFacebook /></a>
              <a href='https://instagram.com' target="_blank" rel="noopener noreferrer" className="text-white mx-2 fs-3">
              <FaInstagram /></a>
              <a href='mailto:contacto@pizzeriamammamia.com' target="_blank" rel="noopener noreferrer" className="text-white mx-2 fs-3">
              <FaEnvelope /></a>
            </p>

        </div>
    </div>
  )
}

export default Footer