import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <nav>
                <div className='logo-container'>
                    <div className="logo">

                    </div>
                    <p className='name'>TORIKUL ISLAM</p>
                </div>
                <div className="navLinks">
                    <Link to='/' >Home</Link>
                    <a href="#about">ABOUT</a>
                    <a href="#projects">PROJECT</a>
                    <a href="#contact">CONTACT</a>
                    <a target='blank' href="https://drive.google.com/file/d/1yixxhzTJXkMvLhyyWtxX88osKB1tl_Sg/view"> <button className='resume-button'>CHECK RESUME</button></a>
                </div>
            </nav>
        </>
    )
};

export default Navbar;