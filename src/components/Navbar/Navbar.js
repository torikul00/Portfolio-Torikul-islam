import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <nav>
            <div ><h1 onClick={() => navigate('/')} className='logo'>TORIKUL ISLAM</h1></div>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/education">Education</Link>
                <Link to="/projects">Projects</Link>
            </div>
            <div>
                <button onClick={() => navigate('/contactMe')} className='contact-button'>Contact Me</button>
            </div>
        </nav>
    );
};

export default Navbar;