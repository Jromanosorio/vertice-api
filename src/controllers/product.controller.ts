import { Request, Response } from "express";
import productModel from "../models/Producto";

const getProducts = async (req: Request, res: Response): Promise<any> => {
    try {
        const productsList = await productModel.find()
        return res.status(200).json({data: productsList})
    } catch (error) {
        return res.status(500).json({error: "SOMETHING_WENT_WRONG"})
    }
}

const getProduct = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params
        const product = await productModel.findOne({ code: id })
        
        if(!product) res.status(200).json({ message: "PRODUCT_NOT_FOUND" })

        return res.status(200).json({ data: product })
    } catch (error) {
        return res.status(500).json({message: "ERROR_SEARCHING_PRODUCT"})
    }
}

export { getProducts, getProduct }