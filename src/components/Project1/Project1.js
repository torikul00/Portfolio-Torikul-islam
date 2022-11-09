import React from 'react';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/Navbar/Navbar';
import './Project1.css'

const Project1 = () => {


   
    return (
        <>
            <div>
                <Navbar />
                <header>
                    <div className="wrapper">
                        <div className='content'>
                            <h1>TOPGEAR PERFORM</h1>
                            <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                            <a target='blank' href="https://topgearperformbd.web.app/">  <button className='project-button'>Live Link</button></a>
                        </div>

                    </div>

                </header>
                <section className='project-wrapper'>
                    <div className="project-image">
                        <img src="https://i.ibb.co/fq6pB0W/Mac-Book-Air-near-the-white-wall-Topgear.png" alt="" />
                    </div>
                    <div className="project-details">
                        <h2>Project Overview</h2>
                        <p>Topgear Perform is performance evaluation based website.Where a user can do many tasks. A user can add their todo.This side has two role, admin role and normal user role.In ebooks feature user can buy books and from article feature user can read articles.
                            <br /> <br />
                            A noraml user can add their tasks and also can chat with admin.
                            <br /> <br />
                            An admin can delete a normal user and also chat with normal user.Admin also can check user tasks details.
                        </p>

                    </div>
                    <div className="tools-used">
                        <h2>Tools Used</h2>
                        <div className="project-skill-buttons">
                            <button>HTML</button>
                            <button>CSS</button>
                            <button>JavaScript</button>
                            <button>Tailwind CSS</button>
                            <button>React JS</button>
                            <button>Node JS</button>
                            <button>GitHub</button>
                            <button>MongoDB</button>
                            <button>Express JS</button>

                        </div>
                    </div>
                    <div className="links">
                        <h2>See Live</h2>
                        <div className="live-links">
                            <a target='blank' href="https://github.com/Arif11819/top-gear-perform-clients"><button>Client Code</button></a>
                            <a target='blank' href="https://github.com/Arif11819/top-gear-perform-server"><button>Server Code</button></a>
                            <a target='blank' href="https://topgearperformbd.web.app/"><button>Live Link</button></a>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Project1;