import styled from "styled-components"
import axios from "axios"
import { useState, useEffect } from "react"

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
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3333/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:3333/products/${productId}`);
      // Atualize a lista de produtos após a exclusão
      const updatedProducts = products.filter((product) => product._id !== productId);
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  }

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
          {products.map((product) => (
            <>
              <DataContainer key={product._id}>
                <Title>produto</Title>
                <H4>{product.product}</H4>
              </DataContainer>
              <DataContainer key={product._id + '_cod'}>
                <Title>código</Title>
                <H4>{product.cod}</H4>
              </DataContainer>
              <DataContainer key={product._id + '_desc'}>
                <Title>descrição</Title>
                <H4>{product.description}</H4>
              </DataContainer>
              <DataContainer key={product._id + '_price'}>
                <Title>preço</Title>
                <H4>R$ {product.price}</H4>
              </DataContainer>
              <ImagesContainer>
                <Images>
                  <Img src="edit.png" width="20px"/> 
                  <Img src="delete.webp" width="20px" onClick={() => handleDelete(product._id)}/> 
              </Images>
              </ImagesContainer>
            </>
          ))}
        </Data>
        </Storage>
      </FormContainer>
    </>
  )
}

export default HomePage