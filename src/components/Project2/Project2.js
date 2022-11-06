import React from 'react';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/Navbar/Navbar';
import './Project2.css'
const Project2 = () => {
    return (
        <>
            <div>
                <Navbar />
                <header>
                    <div className="wrapper">
                        <div className='content'>
                            <h1>MONTAGE CAR</h1>
                            <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                            <a target='blank' href="https://topgearperformbd.web.app/">  <button className='project-button'>Live Link</button></a>
                        </div>

                    </div>

                </header>
                <section className='project-wrapper'>
                    <div className="project-image">
                        <img src="https://i.ibb.co/fCF2TM9/Woman-using-her-laptop-in-the-office-Montage-car.png" alt="" />
                    </div>
                    <div className="project-details">
                        <h2>Project Overview</h2>
                        <p>Montage Car is inventory based website.where an admin can add their product and stored them.But a normal user can buy these products with Visa Card.
                            <br /> <br />
                            A normal user can review on their products and all user reviews will show on reviews section.
                            <br /> <br />
                            In blog page has some blogs about web development.an admin can make admin to another normal user ans also manage all products. for admin access please login with this emal and password , admin@gmail.com, pass: 123456
                           </p>
                    </div>
                    <div className="tools-used">
                        <h2>Tools Used</h2>
                        <div className="project-skill-buttons">
                            <button>HTML</button>
                            <button>CSS</button>
                            <button>JavaScript</button>
                            <button>React JS</button>
                            <button>Node JS</button>
                            <button>GitHub</button>
                            <button>MongoDB</button>
                            <button>Express JS</button>
                            <button>Tailwind CSS</button>
                            <button>Stripe</button>
                        </div>
                    </div>
                    <div className="links">
                        <h2>See Live</h2>
                        <div className="live-links">
                            <a target='blank' href="https://github.com/torikul00/Montage-Car"><button>Client Code</button></a>
                            <a target='blank' href="https://github.com/torikul00/Montage-Car-Server"><button>Server Code</button></a>
                            <a target='blank' href="https://montage-car.web.app/"><button>Live Link</button></a>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Project2;