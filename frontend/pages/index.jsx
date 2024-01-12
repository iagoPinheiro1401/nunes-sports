import styled from "styled-components"
import axios from "axios"
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from "react-hook-form"

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

  @media (max-width: 1100px) {
    width: 500px;
    gap: 8px;
    flex-direction: column;
  }

  @media (max-width: 550px) {
    width: 340px;
    gap: 5px;
    flex-direction: column;
  }
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
  flex-direction: column;
  width: 1000px;
  border-radius: 10px;
  background-color: white;
  padding: 50px 20px;

  @media (max-width: 1100px) {
    width: 500px;
  }

  @media (max-width: 550px) {
    width: 340px;
  }
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

  @media (max-width: 1100px) {
    width: 500px;
  }

  @media (max-width: 550px) {
    width: 350px;
    gap: 10px;
    justify-content: center;
  }
`

const Images = styled.div`
  display: flex;
  gap: 15px;
`

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 42px 0 0 30px;
`

const Img = styled.img`
  cursor: pointer;
  width: 15px;
`

function HomePage () {
  
  const [products, setProducts] = useState([])
  const [editedProduct, setEditedProduct] = useState({})
  const { control, handleSubmit, setValue } = useForm()

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

  const handleEdit = (product) => {
    setEditedProduct(product);
  }

  const handleUpdate = async (productId) => {
    try {
      await axios.put(`http://localhost:3333/products/${productId}`, editedProduct);
      const updatedProducts = products.map((product) =>
        product._id === productId ? editedProduct : product
      );
      setProducts(updatedProducts);
      setEditedProduct({});
    } catch (error) {
      console.error('Error updating product:', error);
    }
  }

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3333/products', data);
      setProducts([...products, response.data]);
      // Limpa os campos do formulário após o envio
      setValue('product', '');
      setValue('cod', '');
      setValue('description', '');
      setValue('price', '');
    } catch (error) {
      console.error('Error creating product:', error);
    }
  }

  return (
    <>
      <Navbar/>
      <H3>Produtos</H3>
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="product"
            control={control}
            render={({ field }) => (
              <Input
                placeholder="produto"
                value={field.value}
                onChange={(e) => setValue('product', e.target.value)}
              />
            )}
          />
          <Controller
            name="cod"
            control={control}
            render={({ field }) => (
              <Input
                placeholder="código"
                value={field.value}
                onChange={(e) => setValue('cod', e.target.value)}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Input
                placeholder="descrição"
                value={field.value}
                onChange={(e) => setValue('description', e.target.value)}
              />
            )}
          />
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <Input
                placeholder="preço"
                value={field.value}
                onChange={(e) => setValue('price', e.target.value)}
              />
            )}
          />
          <Button type="submit">Enviar</Button>
        </Form>

        <Storage>
        {products.map((product) => (
        <Data key={product._id}>
          <DataContainer>
            <Title>produto</Title>
            <H4>{editedProduct._id === product._id ? (
              <input
                type="text"
                value={editedProduct.product || ''}
                onChange={(e) => setEditedProduct({ ...editedProduct, product: e.target.value })}
              />
            ) : (
              product.product
            )}</H4>
          </DataContainer>
          <DataContainer key={product._id + '_cod'}>
            <Title>código</Title>
            <H4>{editedProduct._id === product._id ? (
              <input
                type="text"
                value={editedProduct.cod || ''}
                onChange={(e) => setEditedProduct({ ...editedProduct, cod: e.target.value })}
              />
            ) : (
              product.cod
            )}</H4>
          </DataContainer>
          <DataContainer key={product._id + '_desc'}>
            <Title>descrição</Title>
            <H4>{editedProduct._id === product._id ? (
              <input
                type="text"
                value={editedProduct.description || ''}
                onChange={(e) => setEditedProduct({ ...editedProduct, description: e.target.value })}
              />
            ) : (
              product.description
            )}</H4>
          </DataContainer>
          <DataContainer key={product._id + '_price'}>
            <Title>preço</Title>
            <H4>{editedProduct._id === product._id ? (
              <input
                type="text"
                value={editedProduct.price || ''}
                onChange={(e) => setEditedProduct({ ...editedProduct, price: e.target.value })}
              />
            ) : (
              `R$ ${product.price}`
            )}</H4>
          </DataContainer>
          <ImagesContainer>
            <Images>
              {editedProduct._id === product._id ? (
                <React.Fragment>
                  <button onClick={() => handleUpdate(product._id)}>Salvar</button>
                  <button onClick={() => setEditedProduct({})}>Cancelar</button>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Img src="edit.png" width="20px" onClick={() => handleEdit(product)}/>
                  <Img src="delete.webp" width="20px" onClick={() => handleDelete(product._id)}/>
                </React.Fragment>
              )}
            </Images>
          </ImagesContainer>
        </Data>
      ))}
        </Storage>
      </FormContainer>
    </>
  )
}

export default HomePage