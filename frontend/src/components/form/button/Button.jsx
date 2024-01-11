import styled from "styled-components"

const StyledButton = styled.button`
    border: none;
    border-radius: 10px;
    background-color: blue;
    height: 30px;
    padding: 0 15px;
    margin-top: 25px;
`

function Button({ children }) {
    return(
        <StyledButton>{children}</StyledButton>
    )
}

export default Button