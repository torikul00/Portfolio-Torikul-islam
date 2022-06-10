import React from 'react';
import { useNavigate } from 'react-router-dom';


const ProjectsCard = ({ project, }) => {
    
    const navigate = useNavigate()
    const { image, live_code_link,server_code_link,description,live_link ,_id} = project
    console.log(image)
   
    return (
        <div className="projects-container">
            <div className="single-project">
                <div>
                    <img width='500px' src={image} alt="" />
                </div>
                <div className="project-details">
                    <h2>Montage Car</h2>
                    <p>{ description}</p>
                    <a target='_blank' href="https://montage-car.web.app/"><button>Live Link</button></a>
                    <button onClick={()=>navigate(`/singleProject/${_id}`)} >Explore More</button>
                   

                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;