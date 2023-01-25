import { Router } from "express"
import { signIn, signUp } from "../controllers/authController.js"
import userValidation from "../middlewares/userValidation.js"

const authRouter = Router()

authRouter.post('/sign-up',userValidation, signUp)
authRouter.post('/sign-in', signIn)

export default authRouter