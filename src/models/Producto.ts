import { Schema, model } from "mongoose";
import { Product } from "../interfaces/Product";

const productSchema = new Schema<Product>({
    code: {
        type: Number,
        unique: true,
        required: true
    },
    name: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})

const productModel = model('products', productSchema)
export default productModel