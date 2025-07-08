import { Router } from "express";
import { isUserLogged } from "../middlewares/isUserLogged";
import { getProduct, getProducts } from "../controllers/product.controller";

const productRouter = Router()

productRouter.get('/products', isUserLogged, getProducts)
productRouter.get('/products/:id', isUserLogged, getProduct)

export { productRouter }