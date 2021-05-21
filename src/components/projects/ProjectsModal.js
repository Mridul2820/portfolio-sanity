import React from 'react'

const ProjectsModal = ({ selectedModal, setSelectedModal }) => {
    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')) {
            setSelectedModal(null)
        }
    }

    return (
        <div className="backdrop" onClick={handleClick} >
            <img src={selectedModal} alt="modal pic"/>
        </div>
    )
}

export default ProjectsModal