import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <header>
            <nav>
                <div><h1 className='logo'>TORIKUL ISLAM</h1></div>
                <div className='links'>
                    <a href="/">Home</a>
                    <a href="/">Education</a>
                    <a href="/">Projcts</a>
                </div>
                <div>
                    <button className='contact-button'>Contact Me</button>
                </div>
            </nav>


        </header>
    );
};

export default Home;