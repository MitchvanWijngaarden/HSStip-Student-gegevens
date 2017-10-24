const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = '8090';
const models = require('./models');

models.sequelize.sync().then(function () {

});

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Expose-Headers", "x-auth");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Access-Control-Allow-Headers",  "x-auth");
    next();
});

app.get('/bedrijven', (req, res) => {
    models.bedrijven.findAll({
        raw: true,
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    }).then((bedrijven) => {
        res.send(bedrijven)
    }).catch((error) => {
        res.status(400).send(error);
    });
});

app.get('/student/:email', (req, res) => {
    models.studenten.find({
        where: {
            email: req.params.email
        },
        raw: true,
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    }).then((student) => {
        res.send(student)
    }).catch((error) => {
        res.status(400).send(error);
    });
});

app.listen(port, () => {
    console.log('Started on port', port);
});

module.exports = {
    app
};