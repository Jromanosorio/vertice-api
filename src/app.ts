if (process.env.NODE_ENV !== 'production'){
    require("dotenv").config()
}

const express = require("express");
const cors = require("cors");
const createConnection = require("./config/dbConnection");

const { authRouter } = require("./routes/auth.router");
const { userRouter } = require("./routes/user.router");
const { productRouter } = require("./routes/products.router");
const { orderRouter } = require("./routes/order.router");

const app = express()

const PORT = process.env.PORT || 3000;

app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

createConnection()
    .then(() => console.log("Conectado a la base de datos"))
    .catch((err: any) => console.log("Ha ocurrido un error de conexion", err))

// auth route
app.use('/auth', authRouter)

// api routes
app.use('/', userRouter, productRouter, orderRouter)

app.listen(PORT, () => console.log("Running on PORT: ", PORT))