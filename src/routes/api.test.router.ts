import { Request, Response, Router } from "express";

const testRouter = Router()

testRouter.get('/', (req: Request, res: Response) => { 
    res.status(200).json("Bienvenido")
})

testRouter.get('/ping', (req: Request, res: Response) => { 
    res.status(200).json("Pong")
})

export { testRouter }