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
`

const Logo = styled.h2`
    font-weight: bold;
`

const LogoRed = styled.h2`
    color: red;
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