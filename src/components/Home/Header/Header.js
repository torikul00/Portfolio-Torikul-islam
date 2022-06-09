import React from 'react';
import './Header.css'
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import Navbar from '../../Navbar/Navbar';


const Home = () => {
   
    return (
        <header>
            <Navbar />
            <div className='title-container'>
                <h1>TORIKUL ISLAM</h1>
                <h2>- Web Developer</h2>
                <p>I am a Junior Web Deveoper. I am very passionate and dedicated to my work.</p>
                <button className='resume-button'><a className='resume-link' target='_blank' href="https://drive.google.com/file/d/1yixxhzTJXkMvLhyyWtxX88osKB1tl_Sg/view">Get Resume <BsFillArrowRightSquareFill className='pdf-icon' /></a></button>
            </div>

        </header>
    );
};

export default Home;