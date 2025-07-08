import { Router } from "express";
import { UserInfo } from "../controllers/user.controller";
import { isUserLogged } from "../middlewares/isUserLogged";

const userRouter = Router()

userRouter.get('/me', isUserLogged, UserInfo)

export { userRouter }