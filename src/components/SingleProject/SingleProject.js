import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import './SingleProject.css'

const SingleProject = () => {
    const [project, setProject] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:5000/project/${id}`)
            .then(res => res.json())
            .then(data => setProject(data))

    }, [id])

    const { image, client_code_link, server_code_link, description, live_link, name } = project
    console.log(image)

    return (
        <div className='single-project-container'>
            <img src={image} alt='' />
            <h1>{name}</h1>
            <p>{description}</p>
            <a target='blank' href={live_link}><button>View Website</button></a>
            {server_code_link && <a target='blank' href={server_code_link}><button>Server Code Link</button></a>}
            <a target='blank' href={client_code_link}><button>Clinet Code Link</button></a>
        </div>
    );
};

export default SingleProject;