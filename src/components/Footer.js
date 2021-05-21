import styled from 'styled-components';

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <StyledFooter>
            <p>
                Copyright &copy; {year} by 
                <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://github.com/Mridul2820">
                    Mridul
                </a> 
                . All Rights Reserved. 
            </p>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
    padding: 12px 0;
    text-align: center;
    font-size: 15px;
    color: #555;
    border-top: 1px solid #ccc;
    height: 45px;
    background-color: #f0fff4;

    a {
        margin-left: 5px;
        color: #333;
    }
`

export default Footer