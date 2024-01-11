import styled from "styled-components"

const StyledNavbar = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    background-color: white;
    align-items: center;
`

const LogoContainer = styled.div`
    display: flex;
    background-color: red;
`

const Logo = styled.h3`
    font-weight: bold;
    background-color: white;
`

const LogoRed = styled.h3`
    color: red;
    background-color: white;
`

function Navbar() {
    return(
        <StyledNavbar>
            <LogoContainer>
                <Logo>Nunes</Logo>
                <LogoRed>Sports</LogoRed>
            </LogoContainer>
        </StyledNavbar>
    )
}

export default Navbar