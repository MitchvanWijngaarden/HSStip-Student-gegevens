const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const port = '8090';
const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./routes')(app);
app.get('*', (req, res) => res.status(200).send({
    message: 'Welkom op de Studenten Microservice',
}));

app.listen(port, () => {
    console.log('Started on port', port);
});
module.exports = app;
