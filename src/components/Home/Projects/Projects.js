import React, { useState, useEffect } from 'react';
import './Projects.css'
import ProjectsCard from './ProjectsCard'
const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
    fetch('http://localhost:5000/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div id='projects' className='projects-section-container'>
            <h1>My Recent Projects</h1>
            {
                projects?.map(project => <ProjectsCard project={project} key={project._id} />)
            }
        </div>
    );
};

export default Projects;