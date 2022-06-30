const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    balance: {type: DataTypes.INTEGER}
})

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true},
    description: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER},
    image: {type: DataTypes.STRING},
    quantity: {type: DataTypes.INTEGER, default: 1},
})

const Order = sequelize.define('order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    products: {type: DataTypes.STRING},
    total_price: {type: DataTypes.INTEGER}
})

User.hasMany(Order)
Order.belongsTo(User)


module.exports = {
    User,
    Product,
    Order
}