import styled from "styled-components"

import Navbar from "../src/components/navbar/Navbar"
import Input from "../src/components/form/input/Input"
import Button from "../src/components/form/button/Button"

const H3 = styled.h2`
  text-align: center;
  margin-top: 20px;
`
const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 1000px;
  gap: 15px;
  padding: 50px 20px;
  border-radius: 10px;
`

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`

function HomePage () {
  
  return (
    <>
      <Navbar/>
      <H3>Produtos</H3>
      <FormContainer>
        <Form>
          <Input placeholder="produto"/>
          <Input placeholder="código"/>
          <Input placeholder="descrição"/>
          <Input placeholder="preço"/>
          <Button>Enviar</Button>
        </Form>
      </FormContainer>
    </>
  )
}

export default HomePage