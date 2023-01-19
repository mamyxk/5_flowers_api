const db = require('../models')

const Products = db.product
const ProductType = db.productType

exports.findAll = (req, res) => {
    Products.findAll({
        include: [{
            model: ProductType
        }]
    }).then(data =>
        res.send(data)).catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
}