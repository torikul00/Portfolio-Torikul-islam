import React from 'react';
import './Main.css'
import { BsLinkedin, BsGithub, BsFacebook, BsStackOverflow,BsFillChatLeftTextFill } from 'react-icons/bs'
const Main = () => {
    return (
        <>
            <nav>
                <div className='logo-container'>
                    <div className="logo">

                    </div>
                    <p className='name'>TORIKUL ISLAM</p>
                </div>
                <div className="navLinks">
                    <a href="">HOME</a>
                    <a href="">ABOUT</a>
                    <a href="">PROJECT</a>
                    <a href="">CONTACT</a>
                    <button className='resume-button'>GET RESUME</button>
                </div>
            </nav>
            <main>

                <header>
                    <div className="wrapper">
                        <div className='content'>
                            <h1>HEY, I'AM TORIKUL ISLAM</h1>
                            <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                            <button className='project-button'>PROJECTS</button>
                        </div>
                    </div>
                    <div className="social-icons">
                        <a target='blank' href="https://www.linkedin.com/in/torikul1/"> <BsLinkedin className='social' /></a>
                        <a target='blank' href="https://github.com/torikul00">   <BsGithub className='social' /></a>
                        <a target='blank' href="https://www.facebook.com/timutorikul">   <BsFacebook className='social' /></a>
                        <a target='blank' href="https://stackoverflow.com/users/18026868/torikul-islam">  <BsStackOverflow className='social' /></a>
                    </div>
                </header>
            </main>
            <div className="chat">
                <BsFillChatLeftTextFill className='chat-icon' />
            </div>
        </>
    );
};

export default Main;