import styled from "styled-components"

import Navbar from "../src/components/navbar/Navbar"
import Input from "../src/components/form/input/Input"
import Button from "../src/components/form/button/Button"
import Title from "../src/components/tipography/titles/Titles"
import H4 from "../src/components/tipography/h4/H4"

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
  flex-direction: column;
  gap: 20px;
`

const Storage = styled.div`
  display: flex;
  width: 1000px;
  border-radius: 10px;
  background-color: white;
  padding: 50px 20px;
`

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const Data = styled.div`
  width: 750px;
  display: flex;
  justify-content: space-between;
`

const Images = styled.div`
  display: flex;
  gap: 15px;
`

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 42px 0 0 50px;
`

const Img = styled.img`
  cursor: pointer;
  width: 15px;
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

        <Storage>
          <Data>
            <DataContainer>
              <Title>produto</Title>
              <H4>televisão</H4>
              <H4>geladeira</H4>
              <H4>PS5</H4>
            </DataContainer>
            <DataContainer>
              <Title>código</Title>
              <H4>12er24</H4>
              <H4>45ol82</H4>
              <H4>82ww33</H4>
            </DataContainer>
            <DataContainer>
              <Title>descrição</Title>
              <H4>otimo</H4>
              <H4>gelada</H4>
              <H4>meio lento</H4>
            </DataContainer>
            <DataContainer>
              <Title>preço</Title>
              <H4>R$ 4000</H4>
              <H4>R$ 5300</H4>
              <H4>R$ 2700</H4>
            </DataContainer>
          </Data>
          <ImagesContainer>
            <Images>
              <Img src="edit.png" width="20px"/> 
              <Img src="delete.webp" width="20px"/> 
            </Images>
            <Images>
              <Img src="edit.png" width="20px"/> 
              <Img src="delete.webp" width="20px"/> 
            </Images>
            <Images>
              <Img src="edit.png" width="20px"/> 
              <Img src="delete.webp" width="20px"/> 
            </Images>
          </ImagesContainer>
        </Storage>
      </FormContainer>
    </>
  )
}

export default HomePage