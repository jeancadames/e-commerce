import React from 'react'
import { AiFillInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai';

export const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 Sports Shop All rights reserved</p>
      <p className="icons">
       <a href="https://www.instagram.com/jeancadames/"><AiFillInstagram/></a> 
       <a href="https://www.linkedin.com/in/jean-adames-96918b176/"><AiOutlineLinkedin/></a> 
       <a href="mailto:jeancadames22@gmail.com"><AiOutlineMail/></a>  
      </p>
    </div>
    )
}
