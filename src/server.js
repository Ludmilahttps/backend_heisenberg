import express from "express"
import dotenv from "dotenv"
import cors from "cors"


import authRouter from './routes/authRouter.js'

dotenv.config()

const server = express()
server.use(express.json())

server.use(cors())

server.use(authRouter)

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});