import { Router } from "express";
import { SignIn, SignUp } from "../controllers/auth.controller";

const authRouter = Router()

authRouter.post('/login', SignIn)
authRouter.post('/register', SignUp)

export { authRouter }