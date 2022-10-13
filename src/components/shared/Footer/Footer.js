import React from 'react';
import './Footer.css'
import { BsLinkedin, BsGithub, BsFacebook, BsStackOverflow } from 'react-icons/bs'
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'
import { AiOutlinePhone } from 'react-icons/ai'
const Footer = () => {
    return (
        <footer>
            <div className="name-container">
                <h3>TORIKUL ISLAM</h3>
                <div className='icon-container'>    <HiOutlineMail /><p>torikul.meraj@gmail.com</p>     </div>
                <div className='icon-container'><AiOutlinePhone /><p>+88 01971093582</p></div>
                <div className='icon-container'>    <HiOutlineLocationMarker />  <p>Dhaka , Bangladesh</p></div>

            </div>
            <div className="socials-container">
                <h2>SOCIALS</h2>
                <a target='blank' href="https://www.linkedin.com/in/torikul1/"><BsLinkedin className='icon' /></a>
                <a target='blank' href="https://github.com/torikul00"><BsGithub className='icon' /></a>
                <a target='blank' href="https://www.facebook.com/timutorikul"><BsFacebook className='icon' /></a>
                <a target='blank' href="https://stackoverflow.com/users/18026868/torikul-islam"><BsStackOverflow className='icon' /></a>
                <p className='copy'>Copyright by Torikul islam</p>
            </div>
        </footer>
    );
};

export default Footer;