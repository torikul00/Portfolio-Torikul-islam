import React from 'react';
import './Main.css'
import { BsLinkedin, BsGithub, BsFacebook, BsStackOverflow, BsFillChatLeftTextFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import Navbar from './shared/Navbar/Navbar';
import Footer from './shared/Footer/Footer';
import 'aos/dist/aos.css';
import aos from 'aos'

aos.init({
    duration: 700,
    mirror: true
})
const Main = () => {

    const navigate = useNavigate()
    return (
        <>
            <Navbar />
            <main>

                <header>
                    <div className="wrapper">
                        <div className='content'>
                            <h1>HEY, I'AM TORIKUL ISLAM</h1>
                            <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                            <a href="#projects"> <button className='project-button'>PROJECTS</button></a>
                        </div>
                    </div>
                    <div className="social-icons">
                        <a target='blank' href="https://www.linkedin.com/in/torikul1/"> <BsLinkedin className='social' /></a>
                        <a target='blank' href="https://github.com/torikul00">   <BsGithub className='social' /></a>
                        <a target='blank' href="https://www.facebook.com/timutorikul">   <BsFacebook className='social' /></a>
                        <a target='blank' href="https://stackoverflow.com/users/18026868/torikul-islam">  <BsStackOverflow className='social' /></a>
                    </div>
                   
                </header>
                <section id='about' className='about-container'>
                    <div className="about-content">
                        <h1>  ABOUT ME</h1>
                        <div className="line"></div>
                        <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
                    </div>
                </section>


                <section className='know-me-container'>
                    <div className='know-me-desc'>
                        <h1>Get to know me !</h1>
                        <p>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section. <br /> <br />

                            I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a className='linkedin' href="https://www.linkedin.com/in/torikul1/">Linkedin</a> where I post useful content related to Web Development and Programming <br /> <br />

                            I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                        <a href="#contact"> <button className='contact-button'>CONTACT</button></a>
                    </div>
                    <div className='skills-container'>
                        <h1>MY SKILLS</h1>
                        <div className="skill-buttons">
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
                </section>

                <section id='projects' className='project-section'>
                    <div className="project-content">
                        <h1>PROJECTS</h1>
                        <div className="line"></div>
                        <p>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
                    </div>
                    <div className="projects-wrapper">
                        <div data-aos="fade-right" className="single-project">
                            <img src="https://i.ibb.co/fq6pB0W/Mac-Book-Air-near-the-white-wall-Topgear.png" alt="" />
                        </div>
                        <div className="single-project-content">
                            <div>
                                <h2>TopGear Perform</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, ratione mollitia autem distinctio a culpa excepturi adipisci saepe est. Minus aliquam sit vitae cum commodi dicta minima sed distinctio temporibus velit suscipit cupiditate laudantium tempore rerum accusamus id aperiam deserunt enim dolor doloremque odit nostrum, obcaecati amet. Tenetur, vero alias.</p>
                                <button onClick={() => navigate('/project-1')} className='case-study-button'>Case Study</button>
                            </div>
                        </div>
                    </div>

                    <div className="projects-wrapper">
                        <div data-aos="fade-left" className="single-project">
                            <img src="https://i.ibb.co/fCF2TM9/Woman-using-her-laptop-in-the-office-Montage-car.png" alt="" />
                        </div>
                        <div className="single-project-content">
                            <div>
                                <h2>Montage Car</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, ratione mollitia autem distinctio a culpa excepturi adipisci saepe est. Minus aliquam sit vitae cum commodi dicta minima sed distinctio temporibus velit suscipit cupiditate laudantium tempore rerum accusamus id aperiam deserunt enim dolor doloremque odit nostrum, obcaecati amet. Tenetur, vero alias.</p>
                                <button onClick={() => navigate('/project-2')} className='case-study-button'>Case Study</button>
                            </div>
                        </div>
                    </div>
                    <div className="projects-wrapper">
                        <div className="single-project">
                            <img data-aos="fade-right" src="https://i.ibb.co/5hqHSm0/Man-using-Acer-laptop-while-sitting-on-the-floor-Fruits-buddy.png" alt="" />
                        </div>
                        <div className="single-project-content">
                            <div>
                                <h2>Fruits Buddy</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, ratione mollitia autem distinctio a culpa excepturi adipisci saepe est. Minus aliquam sit vitae cum commodi dicta minima sed distinctio temporibus velit suscipit cupiditate laudantium tempore rerum accusamus id aperiam deserunt enim dolor doloremque odit nostrum, obcaecati amet. Tenetur, vero alias.</p>
                                <button onClick={() => navigate('/project-3')} className='case-study-button'>Case Study</button>
                            </div>
                        </div>
                    </div>
                    <div className="projects-wrapper">
                        <div className="single-project">
                            <img data-aos="fade-left" src="https://i.ibb.co/L8fQ6dJ/Mac-Book-Air-near-the-white-wall-Electrical-galaxy.png" alt="" />
                        </div>
                        <div className="single-project-content">
                            <div>
                                <h2>Electrical Galaxy</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, ratione mollitia autem distinctio a culpa excepturi adipisci saepe est. Minus aliquam sit vitae cum commodi dicta minima sed distinctio temporibus velit suscipit cupiditate laudantium tempore rerum accusamus id aperiam deserunt enim dolor doloremque odit nostrum, obcaecati amet. Tenetur, vero alias.</p>
                                <button onClick={() => navigate('/project-4')} className='case-study-button'>Case Study</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='contact' className='contact-container'>
                    <div className="contact-wrapper">
                        <div className="contact-text">
                            <h1>CONTACT</h1>
                            <div className="line"></div>
                            <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
                        </div>
                        <div className="contact-form-container">
                            <form action="">
                                <label htmlFor="name">Name</label>
                                <input type="text" placeholder='Enter Your Name' />
                                <label htmlFor="email">Email</label>
                                <input type="email" placeholder='Enter Your Email' />
                                <label htmlFor="message">Message</label>
                                <textarea name="message" placeholder='Enter Your Message' id="" cols="30" rows="10"></textarea>
                                <button className='contact-submit-button' type='submit'>Submit</button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <div className="chat">
                <BsFillChatLeftTextFill className='chat-icon' />
            </div>
        </>
    );
};

export default Main;