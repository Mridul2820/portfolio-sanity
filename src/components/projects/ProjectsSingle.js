import React from 'react'
import github from '../../assets/social/github.svg'

const ProjectsSingle = ({ project }) => {
    return (
        <article className="projectsingle">
            <h1 className="project-title" >{project.title}</h1>

            <div className="project-image">
                <img 
                    src={project.screenshot} 
                    alt={project.title} 
                />
            </div>

            <div className="project-repo">
                <a target='_blank' rel="noreferrer" href={project.githubRepo} className="repo">
                    <img src={github} alt={project.title}/>
                    <p>Github</p>
                </a>
            </div>


            <div className="deploy">
                {project.netlify && 
                    <a target='_blank' rel="noreferrer" href={project.netlify} >
                        Netlify
                    </a>
                }
                {project.vercel && 
                    <a target='_blank' rel="noreferrer" href={project.varcel} >
                        Vercel
                    </a>
                }
            </div>
        </article>
    )
}

export default ProjectsSingle
