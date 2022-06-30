const Router = require('express')
const router = new Router()
const controller = require('../controllers/productController')


router.post("/create", controller.createProduct )
router.get("/get-all", controller.getAllProducts)
router.get("/:id", controller.getOne)
router.get("/remove/:id", controller.removeProduct)

module.exports = router