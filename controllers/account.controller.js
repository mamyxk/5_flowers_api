const db = require('../models')

const Client = db.clients
const Accounts = db.accounts

exports.findAll = (req,res) => {
    Accounts.findAll().then(data =>
        res.send(data)).catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
}

exports.create = (req, res) => {
    // Validate req body
    const account = {
        login: req.body.login,
        password: req.body.password   
    }
    Accounts.create(account).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            Message: err.message || "Some message error"
        })
    })

};