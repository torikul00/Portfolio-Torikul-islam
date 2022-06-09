import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'
import { BsFillArrowUpRightSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';

const Home = () => {
    const navigate = useNavigate()
    return (
        <header>
            <nav>
                <div><h1 className='logo'>TORIKUL ISLAM</h1></div>
                <div className='links'>
                    <Link to="/">Home</Link>
                    <Link to="/education">Education</Link>
                    <Link to="/projects">Projects</Link>
                </div>
                <div>
                    <button onClick={() => navigate('/contactMe')} className='contact-button'>Contact Me</button>
                </div>
            </nav>

            <div className='title-container'>
                <h1>TORIKUL ISLAM</h1>
                <h2>- Web Developer</h2>
                <p>I am a Junior Web Deveoper. I am very passionate and dedicated to my work.</p>
                <button className='resume-button'><a className='resume-link' target='_blank' href="https://drive.google.com/file/d/1yixxhzTJXkMvLhyyWtxX88osKB1tl_Sg/view">Get Resume <BsFillArrowRightSquareFill className='pdf-icon' /></a></button>
                <Link className='projects-link' to='/projects'>My Works <BsFillArrowUpRightSquareFill /> </Link>
            </div>

        </header>
    );
};

export default Home;