import { useState, useEffect } from 'react'
import sanityClient from '../client';
import ProjectsHeader from '../components/projects/ProjectsHeader';
import ProjectsSingle from '../components/projects/ProjectsSingle';

const Projects = () => {

    const [projectData, setProjectData] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_types == "project"]{
            title,
            date,
            screenshot,
            description,
            githubRepo,
            netlify,
            varcel,
            tags
        }`)
        .then((data) => setProjectData(data))
        .catch(console.error);

    }, [])

    return (
        <main className="projects">
            <section>
                <ProjectsHeader projectData={projectData} />

                <section className="projects-grid">
                {projectData &&
                    projectData.map((project, index) => (
                        <ProjectsSingle key={index} project={project} />
                    ))
                }
                </section>
            </section>
        </main>
    )
}

export default Projects
