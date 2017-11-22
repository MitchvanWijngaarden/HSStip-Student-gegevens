const studentController = require('../controllers').student;


module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welkom op de HS-stip studenten API',
    }));

    app.post('/api/student', studentController.create);
    app.get('/api/student', studentController.list);
    app.get('/api/student/:email', studentController.retrieve);
    app.put('/api/student/:email', studentController.update);
    app.delete('/api/student/:email', studentController.destroy);

};