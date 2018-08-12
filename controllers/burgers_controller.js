const db = require("../models");

module.exports = function (app) {
    app.get('/', (req, res) => {
        db.Burger.findAll({
            include: [ db.Customer ]
        }).then(function (data) {
            let avalBurgers = []
            let eatenBurgers = []
            let allBurgers = []
            for (let i = 0; i < data.length; i++) {
                if(allBurgers.indexOf(data[i].burger_name) < 0) {
                    allBurgers.push(data[i].burger_name)
                }
                if (data[i].devoured === false) {
                    avalBurgers.push(data[i])
                }
                else {
                    eatenBurgers.push(data[i])
                }
            }
            db.Customer.findAll({order: ['customer_name']}).then(function (result) {
                allBurgers.sort()
                let customers = []
                for (let i = 0; i < result.length; i++) {
                    customers.push(result[i])
                }
                let obj = { burgers: avalBurgers, eatenBurgers: eatenBurgers, burgerMenu: allBurgers, customers: customers }
                res.render("index", obj)
            })
        })
    });   

    app.post('/addBurger', (req, res) => {        
        db.Burger.create(req.body).then(function (result) {
            res.json(result);
        });
    })

    app.put("/devour/:id", (req, res) => {       
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