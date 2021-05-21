import { useState, useEffect } from 'react'
import styled from 'styled-components'

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
        <StyledMain>
            <section>
                <ProjectsHeader projectData={projectData} />

                <StyledGrid>
                {projectData &&
                    projectData.map((project, index) => (
                        <ProjectsSingle 
                            key={index} 
                            project={project} 
                            setSelectedModal={setSelectedModal} 
                        />
                    ))
                }
                </StyledGrid>

                { selectedModal && <ProjectsModal selectedModal={selectedModal} setSelectedModal={setSelectedModal} />}

                {
                    selectedModal ? document.body.classList.add('modal-open') : document.body.classList.remove('modal-open')
                }
            </section>
        </StyledMain>
    )
}

const StyledMain = styled.main`
    min-height: 85vh;
`

const StyledGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 30px 100px 80px 100px;
    background-color: #f0fff4;

    @media only screen and (max-width: 1200px){
        padding: 30px 70px 80px 70px;
    }

    @media only screen and (max-width: 944px){
        padding: 30px 30px 80px 30px;
    }

    @media only screen and (max-width: 768px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 560px){
        gap: 2rem 1.5rem;
    }

    @media only screen and (max-width: 432px){
        grid-template-columns: 1fr
    }
`

export default Projects
