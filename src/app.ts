import "dotenv/config"
import express from "express";
import cors from "cors";
import ConnectDB from "./config/dbConnection";

import { authRouter } from "./routes/auth.router";
import { userRouter } from "./routes/user.router";
import { productRouter } from "./routes/products.router";

const app = express()

const PORT = process.env.PORT || 3000;

app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

ConnectDB()
    .then(() => console.log("Conectado a la base de datos"))
    .catch((err: Error) => console.log("Ha ocurrido un error de conexion", err))

// auth route
app.use('/auth', authRouter)

// api routes
app.use('/api', userRouter)
app.use('/api', productRouter)



app.listen(PORT, () => console.log("Running on PORT: ", PORT))