const Router = require('express')
const router = new Router()
const controller = require('../controllers/userController')


router.post("/reg", controller.registration)
router.post("/aut", controller.autentication) 
router.post("/balance", controller.putMoney) 
router.get("/:id", controller.getUser) 

module.exports = router
