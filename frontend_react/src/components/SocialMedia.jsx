import React from 'react'
import { BsInstagram, BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <a href="https://github.com/WilsonGomez-prog" target="_blank" rel="noreferrer" ><BsGithub /></a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/wilson-alfonso-g%C3%B3mez-santiago-458517207/" target="_blank" rel="noreferrer" ><FaLinkedinIn/></a>            
        </div>
        <div>
            <a href="https://www.instagram.com/wilscout20/" target="_blank" rel="noreferrer" ><BsInstagram/></a>
        </div>
    </div>
  )
}

export default SocialMedia