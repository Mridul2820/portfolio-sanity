import { useState, useEffect } from 'react'
import sanityClient from '../client';
import ProjectsHeader from '../components/projects/ProjectsHeader';
import ProjectsModal from '../components/projects/ProjectsModal';
import ProjectsSingle from '../components/projects/ProjectsSingle';

const Projects = () => {

    const [projectData, setProjectData] = useState(null)
    const [selectedModal, setSelectedModal] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            projectImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
            description,
            githubRepo,
            netlify,
            varcel,
            tags
        }`)
        .then((data) => setProjectData(data))
        .catch(console.error);
    }, [])

    console.log(projectData);

    return (
        <main className="projects">
            <section>
                <ProjectsHeader projectData={projectData} />

                <section className="projects-grid">
                {projectData &&
                    projectData.map((project, index) => (
                        <ProjectsSingle 
                            key={index} 
                            project={project} 
                            setSelectedModal={setSelectedModal} 
                        />
                    ))
                }
                </section>

                { selectedModal && <ProjectsModal selectedModal={selectedModal} setSelectedModal={setSelectedModal} />}

                {
                    selectedModal ? document.body.classList.add('modal-open') : document.body.classList.remove('modal-open')
                }
            </section>
        </main>
    )
}

export default Projects
