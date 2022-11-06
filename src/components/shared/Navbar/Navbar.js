import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'





const Navbar = () => {

    const [showProfilePic, setShowProfilePic] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const navigate = useNavigate()
    function toggleClass() {
        document.getElementById('nav-icon1').classList.toggle('open')
    }

    return (
        <>
            <nav>
                <div className='logo-container'>
                    <div title='View Image' onClick={() => setShowProfilePic(true)} className="logo">

                    </div>
                    <p className='name' onClick={() => navigate('/')}>TORIKUL ISLAM</p>
                </div>
                <div onClick={() => setShowMenu(!showMenu)} className="burger-menu">
                    <div onClick={toggleClass} id="nav-icon1">
                        <span className='span1'></span>
                        <span className='span2'></span>
                        <span className='span3'></span>
                    </div>
                </div>
                <div className="navLinks">
                    <Link to='/' >Home</Link>
                    <a href="#about">ABOUT</a>
                    <a href="#projects">PROJECT</a>
                    <a href="#contact">CONTACT</a>
                    <a target='blank' href="https://drive.google.com/file/d/1yixxhzTJXkMvLhyyWtxX88osKB1tl_Sg/view"> <button className='resume-button'>CHECK RESUME</button></a>
                </div>
            </nav>
            {showProfilePic && <div>
                <div data-aos="zoom-in" onClick={() => setShowProfilePic(false)} className="profile-image-backdrop">
                    <div className="profile-image-wrapper">
                        <img src="https://i.ibb.co/wJwBQy4/Torikul-Islam.jpg" alt="" />
                    </div>
                </div>

            </div>}
            {showMenu ? <div data-aos="fade-right" className="burger-menu-container">

            </div> : null}
        </>
    )
};

export default Navbar;