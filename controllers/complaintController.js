const db = require('../models')

const Complaints = db.complaint

exports.findAll = (req, res) => {
    Complaints.findAll().then(data =>
        res.send(data)).catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
}

exports.create = (req, res) => {
    Complaints.create(
        {
            reason: req.body.reason,
            orderId: req.body.orderId,
            statusComplaintId: 1,
            decision: 0
        }
    ).then(data =>
        res.send(data)).catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
}

exports.changeStatus = (req, res) => {
    Complaints.update(
        {
            decision: req.body.decision
        },
        {
            where: {
                id: req.body.id
            }
        }
    ).then(data =>
        res.send(data)).catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
}