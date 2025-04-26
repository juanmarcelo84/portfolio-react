import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../css/Footer.css'

const Footer = () => {
  return (
    <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f8f9fa' }}>
      <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
        <FaFacebook size={24} color="#4267B2" />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
        <FaTwitter size={24} color="#1DA1F2" />
      </a>
      <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
        <FaInstagram size={24} color="#C13584" />
      </a>
    </div>
  )
}

export default Footer

