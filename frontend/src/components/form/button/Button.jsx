import styled from "styled-components"

const StyledButton = styled.button`
    border: none;
    color: white;
    border-radius: 10px;
    background-color: blue;
    height: 30px;
    padding: 0 15px;
    margin-top: 25px;
    cursor: pointer;

    &:hover {
        background-color: #4444f6;
    }

    &:active {
        background-color: blue;
    }
`

function Button({ children }) {
    return(
        <StyledButton>{children}</StyledButton>
    )
}

export default Button