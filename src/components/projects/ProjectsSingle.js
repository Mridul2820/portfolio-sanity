import React from 'react'
import github from '../../assets/social/github.svg'

const ProjectsSingle = ({ project, setSelectedModal }) => {
    return (
        <article className="projectsingle">
            <div className="project-image">
                <img 
                    src={project.projectImage.asset.url} 
                    alt={project.title} 

                    onClick={() => {
                        setSelectedModal(project.projectImage.asset.url)
                    }}
                />
            </div>
            <div className="project-body">
                <div className="tags">
                {project.tags && 
                    project.tags.map((tag, index) => (
                        <span className="tag" key={index} >{tag}</span>
                    ))
                }
                </div>

                <h1 className="project-title" >{project.title}</h1>

                <div className="links">
                    {project.varcel && 
                        <a target='_blank' rel="noreferrer" href={project.varcel} className="varcel" >
                            View Demo
                        </a>
                    }

                    <a target='_blank' rel="noreferrer" href={project.githubRepo} className="repo">
                        <img src={github} alt={project.title}/>
                        <p>Github</p>
                    </a>
                </div>


            </div>
        </article>
    )
}

export default ProjectsSingle
