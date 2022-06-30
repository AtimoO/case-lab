const{Order} = require('../models/models')
const uuid = require('uuid')
const path = require('path')


class OrderController{
    async create(req,res) {
        try {
            let {userId: userId, products, total_price} = req.body
            const order = await Order.create({
                "userId": userId,
                "products": products,
                "total_price": total_price
            })
            res.json({"resp": order})
        } catch (e) {
            res.json({"error": error})
        }
    }
}


module.exports = new OrderController()