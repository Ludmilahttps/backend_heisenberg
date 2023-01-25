import express from "express"
import { MongoClient, ObjectId } from "mongodb"
import dotenv from "dotenv"
import cors from "cors"
import joi from "joi"
import bcrypt from "bcrypt"
import { v4 as uuidV4 } from 'uuid'

import express, {json} from "express"
import dotenv from "dotenv"
import cors from "cors"

import authRouter from './routes/authRouter.js'
import postRouter from './routes/postRouter.js'

dotenv.config()

const server = express()
server.use(json())

server.use(cors())

server.use(authRouter)

server.listen(5000)