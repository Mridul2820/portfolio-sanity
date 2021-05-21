import React from 'react'
import reactArt from '../../assets/svgs/react-art.svg'
import imgSection from '../../assets/svgs/image-section-art.svg'

const ProjectsHeader = ({ projectData }) => {
    return (
        <div className="projectsheader">
            <div className="projectsheader__container">
                <div className="projectsheader__img img-left">
                    <img src={reactArt} alt="react"/>
                </div>
                <div className="projectsheader__title">
                    <h1 className="title">List of the Projects</h1>
                    <div className="underline"></div>
                    <h5 className="project-number">
                        Total Projects : 
                        {/* {projectData.length} */}
                    </h5>
                </div>
                <div className="projectsheader__img img-right">
                    <img src={imgSection} alt="section"/>
                </div>
            </div>
        </div>
    )
}

export default ProjectsHeader
