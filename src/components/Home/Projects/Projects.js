import React from 'react';
import './Projects.css'
import MontageCarBanner from '../../images/montage-car-banner.jpg'
import FruitsBuddy from '../../images/fruits-buddy-banner.jpg'
import ElectricalGalaxy from '../../images/electrical-galaxy-banner.jpg'
const Projects = () => {
    return (
        <div className='projects-section-container'>
            <h1>My Recent Projects</h1>
            <div className="projects-container">
                <div className="single-project">
                    <div>
                        <img width='500px' src={MontageCarBanner} alt="" />

                    </div>
                    <div className="project-details">
                        <h2>Montage Car</h2>
                        <p>Montage Car is buying cart parts website. When normal users log in, They Can see Dashboard route. On the dashboard route, users can feedback on our Product and order our products. After order they can pay with a card. When admin login ,admin can manage all orders , Delete users , addproducts ,make admin , etc.</p>
                        <a target='_blank' href="https://montage-car.web.app/"><button>Live Link</button></a>
                        <a target='_blank' href="https://github.com/torikul00/Montage-Car"><button>Client Code Link</button></a>
                        <a target='_blank' href="https://github.com/torikul00/Montage-Car-Server"><button>Server Code Link</button></a>

                    </div>
                </div>
            </div>
            <div className="projects-container">
                <div className="single-project">
                    <div>
                        <img width='500px' src={FruitsBuddy} alt="" />

                    </div>
                    <div className="project-details">
                        <h2>Furits Buddy</h2>
                        <p>Fruits Buddy is a simple inventory website . Users can add products andupdate product quantity. On Manage All Items page users can updateProducts and delete products .There are some blogs on the blog page.</p>
                        <a target='_blank' href="https://fruits-buddy.web.app/"><button>Live Link</button></a>
                        <a target='_blank' href="https://github.com/torikul00/Fruits-Buddy-Client"><button>Client Code Link</button></a>
                        <a target='_blank' href="https://github.com/torikul00/Fruits-Buddy_Server"><button>Server Code Link</button></a>

                    </div>
                </div>
            </div>
            <div className="projects-container">
                <div className="single-project">
                    <div>
                        <img width='500px' src={ElectricalGalaxy} alt="" />

                    </div>
                    <div className="project-details">
                        <h2>Electrical Galaxy</h2>
                        <p>Electrical Galaxy is a simple website. Users can sign up/login on thisWebsite. Without login, the user can not access the product checkout page.</p>
                        <a target='_blank' href="https://electrical-galaxy.web.app/"><button>Live Link</button></a>
                        <a target='_blank' href="https://github.com/torikul00/Electrical-Galaxy"><button> Code Link</button></a>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;