import express, {json} from "express"
import dotenv from "dotenv"
import cors from "cors"

import authRouter from './routes/authRouter.js'
import postRouter from './routes/postRouter.js'

dotenv.config()

const server = express()
server.use(json())


server.listen(5000)
