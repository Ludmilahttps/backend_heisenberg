import userSchema from "../schemas/userSchema.js"
import db from "../database/db.js"

export default async function (request, response, next) {
    
    const validate = userSchema.validate(request.body)
    const { email } = request.body
    const user = await db.collection('users').findOne({email})
    
    if(validate.error) {
        console.log(validate.error)

        return response.status(422).send('Unprocessable Entity')
    }

    if(user){
        response.status(409).send("email already exist!")
        return
    }
  

    next()
}