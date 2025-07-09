import { connect } from "mongoose"

const ConnectDB = async() => {
    const DB_URL = <string>process.env.DB_URL
    await connect(DB_URL)
}

module.exports = ConnectDB