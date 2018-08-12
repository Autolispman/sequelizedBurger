const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require("express-handlebars");
//const routes = require('./controllers/burgers_controller.js')
const path = require('path')
var db = require("./models");

const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// app.use(express.static(process.cwd() + '/public'))
app.use(express.static(path.join(__dirname, '/public')))


// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use('/', routes);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/burgers_controller.js")(app);
require("./controllers/customer_controller.js")(app);

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});


