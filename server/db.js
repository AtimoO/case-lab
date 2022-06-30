require('dotenv').config()
const {Sequelize} = require("sequelize")



module.exports = new Sequelize(
    process.env.POSTGRES_DB,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.HOST,
        port: process.env.POSTGRES_PORT  
    }
)


