import React from 'react';
import { BsGithub } from 'react-icons/bs';
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
                            <button className='project-button'>Live Link</button>
                        </div>

                    </div>

                </header>
                <section className='project-wrapper'>
                    <div className="project-image">
                        <img src="https://i.ibb.co/fq6pB0W/Mac-Book-Air-near-the-white-wall-Topgear.png" alt="" />
                    </div>
                    <div className="project-details">
                        <h2>Project Overview</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, beatae velit? Fugiat voluptate, aspernatur laboriosam sint debitis illum distinctio recusandae deleniti culpa odio aperiam totam cum minus, magnam dolorem deserunt veniam. Voluptatum distinctio, eaque
                            <br /> <br />
                            accusantium, officiis amet exercitationem soluta excepturi a dolorum, recusandae voluptas sed velit? Sit optio recusandae minus. Cum facere iusto adipisci! Quod, dolore at deleniti quisquam
                            <br /> <br />
                            quis dolor quas dicta minima cupiditate? A impedit rerum nisi ipsum maiores, ipsa odit cupiditate, eius beatae, voluptatum velit earum temporibus magni! Temporibus dignissimos nobis cupiditate nulla accusantium velit ullam explicabo. Expedita, provident neque libero repellendus eveniet assumenda aut ad officia.</p>
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
                            <button>Bootstrap</button>
                        </div>
                    </div>
                    <div className="links">
                        <h2>See Live</h2>
                        <div className="live-links">
                            <a href=""><button> <BsGithub />Client Code</button></a>
                            <a href=""><button>Server Code</button></a>
                            <a href=""><button>Live Link</button></a>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Project1;