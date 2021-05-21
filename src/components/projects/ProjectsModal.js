import React from 'react'
import styled from 'styled-components'

const ProjectsModal = ({ selectedModal, setSelectedModal }) => {
    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')) {
            setSelectedModal(null)
        }
    }

    return (
        <StyledBackDrop className="backdrop" onClick={handleClick} >
            <img src={selectedModal} alt="modal pic"/>
        </StyledBackDrop>
    )
}

const StyledBackDrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);

    img {
        display: block;
        max-width: 60%;
        max-height: 80%;
        margin: 130px auto;
        box-shadow: 3px 5px 7px rgba(0,0,0,0.5);
        border: 3px solid white;
    }
`

export default ProjectsModal