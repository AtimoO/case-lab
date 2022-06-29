const Router = require('express')
const router = new Router()
const controller = require('../controllers/userController')


router.post("/reg", controller.registration)
router.post("/aut", controller.autentication) // авторизация
router.post("/balance", controller.putMoney) // пополнить балланс

module.exports = router
