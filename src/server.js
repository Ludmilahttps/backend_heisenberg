import express from "express"
import dotenv from "dotenv"
import cors from "cors"


import authRouter from './routes/authRouter.js'
import cartRouter from './routes/cart.router.js'
import productCard from './routes/products.router.js'

dotenv.config()

const server = express()
server.use(express.json())

server.use(cors())

server.use(authRouter)
server.use(cartRouter)
server.use(productCard)

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});