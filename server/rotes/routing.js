const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const productRouter = require('./productRouter')

router.use("/user", userRouter)
router.use("/product", productRouter)
router.use("/order", productRouter)


module.exports = router

