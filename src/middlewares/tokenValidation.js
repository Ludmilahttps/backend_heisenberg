import db from "../database/db.js"
import { ObjectId } from "mongodb"

export default async function tokenValidationMiddleware(request, response, next) {
    
    const { authorization } = request.headers
    if(!authorization) return response.sendStatus(401)

    const token = authorization?.replace('Bearer ', '')
    
    if (!token) {
      return response.status(401).send('Unauthorized sem token')
    }
  
    const session = await db.collection('sessions').findOne({ token })
    
    if (!session) {
      return response.status(401).send('Unauthorized token nao existe')
    }
  
    const user = await db.collection('users').findOne({ _id: session.userId })
    if (!user) {
      return response.status(401).send('Unauthorized user nao encontrado')
    }

    response.locals.session = session
    response.locals.user = user
    next()

  }