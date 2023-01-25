import userSchema from "../schemas/userSchema.js"

export default async function (request, response, next) {
    
    const validate = userSchema.validate(request.body)
  
    if(validate.error) {
        return response.status(422).send('Unprocessable Entity')
    }

    next()
}