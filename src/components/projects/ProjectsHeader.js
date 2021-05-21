import React from 'react'
import styled from 'styled-components';

import reactArt from '../../assets/svgs/react-art.svg'
import imgSection from '../../assets/svgs/image-section-art.svg'

const ProjectsHeader = ({ projectData }) => {
    return (
        <StyledMain>
            <StyledContainer>
                <StyledImg className="img-left">
                    <img src={reactArt} alt="react"/>
                </StyledImg>
                <StyledTitle>
                    <h1 className="title">List of the Projects</h1>
                    <div className="underline"></div>
                    {projectData && 
                        <h5 className="project-number">
                            Total Projects :  {projectData.length}
                        </h5>
                    }
                </StyledTitle>
                <StyledImg className="img-right">
                    <img src={imgSection} alt="section"/>
                </StyledImg>
            </StyledContainer>
        </StyledMain>
    )
}

const StyledMain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    background-image: linear-gradient(to right, #868f96 0%, #596164 100%);
`

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;

    width: 90vw;
    max-width: 1000px;
    color: #fff;
`

const StyledImg = styled.div`
    width: 200px;

    @media only screen and (max-width: 640px){
        width: 150px;
    }

    @media only screen and (max-width: 560px){
        width: 140px;
    }

    @media only screen and (max-width: 480px){
        width: 100px;
    }

    @media only screen and (max-width: 352px){
        width: 80px;
    }

    &.img-right {
        justify-self: end;
    }

    img {
        width: 100%;
    }
`

const StyledTitle = styled.div`
    text-align: center;

    .title {
        padding: .5rem 0;

        @media only screen and (max-width: 640px){
            font-size: 25px;
        }

        @media only screen and (max-width: 480px){
            font-size: 20px;
        }

        @media only screen and (max-width: 352px){
            font-size: 16px;
        }
    }

    .underline {
        width: 6rem;
        height: .25rem;
        background: #d4fc79 ;
        margin-left: auto;
        margin-right: auto;

        @media only screen and (max-width: 352px){
            width: 4rem;
        }
    }  

    .project-number {
        margin-top: 5px;
    }
`



export default ProjectsHeader
