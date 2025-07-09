import { Response } from "express";
import orderModel from "../models/Order";
import { LoggedUserRequest } from "../interfaces/Request";
import productModel from "../models/Producto";

const createOrder = async (req: LoggedUserRequest, res: Response): Promise<any> => {
    try {

        const user = req.user
        const { productsToOrder } = req.body;
        let total = 0

        for (const item of productsToOrder) {
            const product = await productModel.findOne({ code: item.productCode });
            if (!product) return res.status(404).json({ error: "PRODUCT_NOT_FOUND", item });

            total += product.price * item.quantity;
        }

        const order = await orderModel.create({userID: user._id, name: user.name, productsToOrder, total})

        return res.status(200).json(order)

    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "ERROR_CREATING_ORDER"})
    }
}

const getMyOrders = async (req: LoggedUserRequest, res: Response): Promise<any> => {
    try {
        const myOrdersList = await orderModel.find({userID: req.user._id}).select('-createdAt')
        return res.status(200).json({data: myOrdersList})
    } catch (error) {
        return res.status(500).json({error: "SOMETHING_WENT_WRONG"})
    }
}

export { createOrder, getMyOrders }