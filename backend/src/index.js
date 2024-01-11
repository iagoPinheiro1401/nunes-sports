import express from "express"
import bodyParser from "body-parser"

import productsController from "./controllers/products"

const app = express()
const port = 3333

app.use(bodyParser.json())

app.use('/products', productsController)

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`)
})