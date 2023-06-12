import React from 'react'
import {FaFacebookF,FaInstagram,FaTwitter,FaLinkedin,} from "react-icons/fa"

import './style.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi distinctio iure ducimus eum sunt? Facilis magni eos numquam soluta vitae, illo excepturi fuga tempora sapiente esse temporibus ipsa, at modi officiis repellendus quo ab impedit eveniet! At, odio? Sequi fuga accusamus sint. Dignissimos in pariatur quo fugiat, autem reprehenderit perferendis.
        </div>
        <div className="socialIcons">
          <span className="icon"><FaFacebookF/></span>
          <span className="icon"><FaInstagram/></span>
          <span className="icon"><FaTwitter/></span>
          <span className="icon"><FaLinkedin/></span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;