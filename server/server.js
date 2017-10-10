const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = '8090';
const models = require('./models');

models.sequelize.sync().then(function () {

});

app.use(bodyParser.json());

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

app.get('/student/:gebruikersnaam', (req, res) => {
    models.studenten.find({
        where: {
            gebruikersnaam: req.params.gebruikersnaam
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