import styled from "styled-components"

const StyledInput = styled.input`
    padding: 7px 20px;
    border-color: #827e7e;
    border-radius: 10px;
    width: 150px;
    background-color: none;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: none;
`

function Input({ placeholder }) {
    return (
        <Container>
            <span>{placeholder}</span>
            <StyledInput placeholder={placeholder}/>
        </Container>
    )
}

export default Input