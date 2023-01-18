const db = require('../models')

const Client = db.clients
const Accounts = db.account

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
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }
    console.log(account)
    Accounts.create(account).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            Message: err.message || "Some message error"
        })
    })

};

exports.login = (req,res) => {
    Accounts.findAll({
        where: {
            login: req.body.login,
            password: req.body.password
        }
    }).then(data =>
        res.send(data)
    ).catch(err => {
        // console.log(req.body)
        res.status(400).send({
            Message: err.message || "Not found"
        })
    })
};