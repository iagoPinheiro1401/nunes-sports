import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

import productsController from "./controllers/products"

const app = express()
const port = 3333

app.use(bodyParser.json())
app.use(cors())
app.use('/products', productsController)

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`)
})