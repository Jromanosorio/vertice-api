import { Schema, model } from "mongoose";
import { User} from "../interfaces/User";

const userSchema = new Schema<User>({
    name: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
    versionKey: false
})

const userModel = model('users', userSchema)
export default userModel