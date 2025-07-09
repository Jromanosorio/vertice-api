import { Schema, model } from "mongoose";
import { Order } from "../interfaces/Order";

const orderSchema = new Schema<Order>({
    userID: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    productsToOrder: [{
        _id: false,
        productCode: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            min: 1,
            required: true,
        }
    }],
    total: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})

const orderModel = model('orders', orderSchema)
export default orderModel