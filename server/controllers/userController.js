const{User} = require('../models/models')


class UserController {
    async registration(req, res) {
        const query = req.body
        try {
            const [user, created] = await User.findOrCreate({
                where: { login: query.login },
                defaults: {
                    "login": query.login, "password": query.password, "balance": 0
                }
            })
            if (created) {
                res.json(
                    {status: 200, 
                        user_info: 
                        {
                            id: user.id,
                            login: user.login,
                            balance: user.balance,
                        }
                    })
            } else {
                res.json({message: "User exist"})
            }
        } catch (e) {
            res.json({message: "Unexpected error"})
        }
    }

    async autentication(req, res) {
        const query = req.body
        const info = {"login": query.login, "password": query.password}
        try {
            const user = await User.findOne({where: info})
            if (user !== null) {
                res.json(
                    {
                    status: 200, 
                    user_info: 
                        {
                            id: user.id,
                            login: user.login,
                            balance: user.balance,
                        }
                    })
            } else {
                res.json({status: 300})
            }
        } catch (e) {
            res.json({message: "Unexpected error"})
        }
        
    }

    async putMoney (req, res) {
        const query = req.body
        console.log("🚀 ~ file: userController.js ~ line 59 ~ UserController ~ putMoney ~ query", query)
        const user_info = await User.findOne({where: {"id": query.id}})
        
        const new_balance = query.sum + user_info.balance
        
        await User.update({balance: new_balance}, {
            where: {id: user_info.id}
        })
        res.json({message: "Balance was up", user_id: user_info.id, balance: new_balance})
    }

    async getUser (req, res) {
        try {

        const query = req.params
        const user = await User.findOne({where: {"id": query.id}})
        res.json({message: user})
        } catch (e) {
            res.json({message: "user not found"})
        }
    }
}

module.exports = new UserController()