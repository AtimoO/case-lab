const{Order} = require('../models/models')
const{User} = require('../models/models')
const uuid = require('uuid')
const path = require('path')


class OrderController{
    async create(req,res) {
        try {
            let {userId, products, total_price} = req.body
            const order = await Order.create({
                "userId": userId,
                "products": products,
                "total_price": total_price
            })
            const user = await User.findOne({
                where: {"id": userId}
            })
            const new_balance = user.balance - total_price
            await User.update({balance: new_balance}, {
                where: {"id": userId}
            })
            res.json({"resp": order})
        } catch (e) {
            res.json({"error": error})
        }
    }
}


module.exports = new OrderController()