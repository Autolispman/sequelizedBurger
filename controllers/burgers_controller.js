const db = require("../models");

module.exports = function (app) {
    app.get('/', (req, res) => {
        console.log("came through root route")
        db.Burger.findAll({}).then(function (data) {
            let avalBurgers = []
            let eatenBurgers = []
            for (let i = 0; i < data.length; i++) {
                if (data[i].devoured === false) {
                    avalBurgers.push(data[i])
                }
                else {
                    eatenBurgers.push(data[i])
                }
            }
            let obj = { burgers: avalBurgers, eatenBurgers: eatenBurgers }
            res.render("index", obj)
        })
    });

    app.post('/addBurger', (req, res) => {
        console.log('came through addBurger route')
        db.Burger.create(req.body).then(function (result) {
            res.json(result);
        });
    })

    app.put("/devour/:id", (req, res) => {
        console.log('came through devour route')
        console.log(req.params.id)
        db.Burger.update({
            devoured: true,
        },
            {
                where: {
                    id: req.params.id
                }
            }).then(function (result) {
                res.json(result);
            });
    });

    app.delete('/trash/:id', (req, res) => {
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (result) {
            res.json(result);
        });
    })
}