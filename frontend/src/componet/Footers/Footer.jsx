import React from 'react'
import './footer.css'

import {
  FaPhone, FaGlobe, FaEnvelope, FaMapMarkerAlt,
    FaInstagram, FaGithub
 } from 'react-icons/fa';
 import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className='footer container'>
        <div className='footer-left'>
          <h2 className='footer-title'>SNEHA CHOUHAN</h2>
          <p className='footer-role'>MERN Stack Developer</p>
          <div className='footer-contact'>
            <p><FaPhone /> 9131121635</p>
            <p><FaGlobe /> www.website.com</p>
            <p><FaEnvelope /> snehachouhan277@gmail.com</p>
            <p><FaMapMarkerAlt /> bhopal mp</p>
          </div>
        </div>
        <div className='footer-navbar'>
          <nav>
            <Link to='/' className='footer-link'>Home</Link>
            <Link to='/about' className='footer-link'>About</Link>
            <Link to='/skills' className='footer-link'>Skills</Link>
            <Link to='/projects' className='footer-link'>Projects</Link>
            <Link to='/contacts' className='footer-link'>Contact</Link>
          </nav>
        </div>

        <div className='footer-right'>
    <div className="social-icons">
          <a href="https://www.instagram.com/ishi_7700/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className='sicons' />
          </a>
        
        
        
          <a href="https://github.com/snehachouhan486/" target="_blank" rel="noopener noreferrer">
            <FaGithub className='sicons' />
          </a>
        </div>
        </div>
        <div>
          <p>© {new Date().getFullYear()} Sneha chouhan. All rights reserved.</p>
        </div>

      </footer>

    </>
  )
}

export default Footer