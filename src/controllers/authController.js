import bcrypt from 'bcrypt'
import { v4 as uuid } from 'uuid'
import db from '../database/db.js'

export async function signIn (request, response) {

    const { email, password } = request.body
    
    try {
        const user = await db.collection('users').findOne({ email })

        if(user && bcrypt.compareSync(password, user.password)) {
            const token = uuid()
            await db.collection("sessions").insertOne({userId: user._id, token})
            response.send({token, name:user.name})
        } else {
            return response.status(401).send('Unauthorized')
        }
    } catch(error) {
        return response.send(error).status(500)
    }
}

export async function signUp (request, response) {
    
    const { name, email, password } = request.body

    try {
        
        const pass = bcrypt.hashSync(password, 10)
        await db.collection('users').insertOne({name, email, password: pass})
        return response.status(201).send('OK')

    } catch(error) {
        return response.send(error).status(500)
    }
}