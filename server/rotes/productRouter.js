const Router = require('express')
const router = new Router()


router.post("/create-product")
router.get("/get-all-products")
router.get("/:id")

module.exports = router