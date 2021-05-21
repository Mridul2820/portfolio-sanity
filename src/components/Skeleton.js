import React from 'react'
import styled from 'styled-components'
const Skeleton = () => {
    return (
        <StyledSkeleton>
            <div className="container">
                <StyledBanner></StyledBanner>
                <StyledHeader></StyledHeader>
                <StyledContent></StyledContent>
                <StyledContent></StyledContent>
                <StyledContent></StyledContent>
            </div>
        </StyledSkeleton>
    )
}

const StyledSkeleton = styled.div`
    background-color: #f0fff4;
    padding: 50px 0;

    .container {
        max-width: 1000px;
        margin: 0 auto;

        > div {
            background: #96e6a1;
            border-radius: 4px;
            margin: 20px 0;
        }
    }
`
const StyledBanner = styled.div`
    padding: 12% 0;
`
const StyledHeader = styled.div`
    padding: 15px 0;
    max-width: 500px;
`
const StyledContent = styled.div`
    padding: 20px 0;
    max-width: 1000px;
`



export default Skeleton
