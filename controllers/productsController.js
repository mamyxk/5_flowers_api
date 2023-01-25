const db = require('../models')

const Products = db.product
const ProductType = db.productType

exports.findAll = (req, res) => {
    Products.findAll({
        include: [{
            model: ProductType,
            attributes: "id"
        }]
    }).then(data =>
        res.send(data)).catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
}

exports.create = (req, res) => {
    const types = [1]
    Products.create(
        {
            name: req.body.name,
            price: req.body.price,
            tax: req.body.tax,
            active: req.body.active,
            availBouquet: req.body.availBouquet,
        }
    )
        .then(data => {
            console.log(data)
            res.send(data)
        }).catch(err => {
            res.status(500).send({
                Message: err.message || "Some message error"
            })
        })

}