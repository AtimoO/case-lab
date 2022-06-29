const{Product} = require('../models/models')
const uuid = require('uuid')
const path = require('path')

class ProductController {
    async createProduct(req, res, next) {
        try {
            let {title, description, price} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve( __dirname, '..', 'static', fileName))
            const [product, created] = await Product.findOrCreate({
                where: {"title": title},
                defaults: {"title": title, "price": price, "description": description, "image": fileName}
            });
            if (created) {
                res.json([{message: "Product created"} , {product}])
            } else {
                res.json({message: "Poduct exist"})
            }
        } catch (e) {
            res.json({"message": e })
        }   
    }

    async getAllProducts(req, res) {
        try {
            const query = req.body
            const products = await Product.findAll()
            res.json({products})
        } catch (e) {
            res.json({error: e})
        }
    }
    async getOne(req, res) {
        try {
            const query = req.params
            const product = await Product.findOne({where: {id: query.id}})
            res.json({product})
        } catch (e) {
            res.json({"error": e})
        }
    }
    async removeProduct(req, res) {
        try {
            const query = req.params
            const product = await Product.findOne({where: {id: query.id}})
            await Product.destroy({where: {id: query.id}})
            const message = `product ${product.title} Was deleted`
            res.json({message: message })
        } catch (e) {
            res.json({"error": e})
        }
    }
}


module.exports = new ProductController()