const db = require("../models");

module.exports = function (app) {
    app.get('/customer/:customer', (req, res) => {
        db.Customer.findOne({
            where: {
                customer_name: req.params.customer
            }
        }).then(function (result) {
            res.json(result);
        })
    })

    app.post('/customer', (req, res) => {
        db.Customer.create(req.body).then(function (result) {
            res.json(result);
        });
    })
}