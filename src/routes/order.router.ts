import { Router } from "express";
import { isUserLogged } from "../middlewares/isUserLogged";
import { createOrder, getMyOrders } from "../controllers/order.controller";

const orderRouter = Router()

orderRouter.get('/orders', isUserLogged, getMyOrders)
orderRouter.post('/orders', isUserLogged, createOrder)

export { orderRouter }