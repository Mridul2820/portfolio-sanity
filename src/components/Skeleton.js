import React from 'react'
import styled from 'styled-components'
const Skeleton = () => {
    return (
        <StyledSkeleton>
            <StyledBanner></StyledBanner>
            <StyledHeader></StyledHeader>
            <StyledContent></StyledContent>
            <StyledContent></StyledContent>
            <StyledContent></StyledContent>
        </StyledSkeleton>
    )
}

const StyledSkeleton = styled.div`
    max-width: 1000px;
    margin: 20px auto;
    min-height: 90vh;

    > div {
        background: #dbcc1a;
        border-radius: 4px;
        margin: 20px 0;
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
    padding: 8px 0;
    max-width: 1000px;
`



export default Skeleton
