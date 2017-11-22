const student = require('../models').student;


module.exports = {
    create(req, res) {
        return student
            .create({
                voornaam : req.body.voornaam,
                tussenvoegsel: req.body.tussenvoegsel,
                achternaam : req.body.achternaam,
                email : req.body.email,
                mobielnummer : req.body.mobielnummer,
                wachtwoord: req.body.wachtwoord,
                studierichting : req.body.studierichting,
                mentor: req.body.mentor
            })
            .then((student) => res.status(201).send(student))
            .catch((error) => res.status(400).send(error));
    },

    list(req, res) {
        return student
            .findAll({

            })
            .then((student) => res.status(200).send(student))
            .catch((error) => res.status(400).send(error));
    },

    retrieve(req, res) {
        return student
            .findById(req.params.email, {

            })
            .then((student) => {
                if (!student) {
                    return res.status(404).send({
                        message: 'student niet gevonden',
                    });
                }
                return res.status(200).send(student);
            })
            .catch((error) => res.status(400).send(error));
    },

    update(req, res) {
        return student
            .findById(req.params.email, {

            })
            .then(student => {
                if (!student) {
                    return res.status(404).send({
                        message: 'Student niet gevonden',
                    });
                }
                return student
                    .update({
                        voornaam : req.body.voornaam,
                        tussenvoegsel: req.body.tussenvoegsel,
                        achternaam : req.body.achternaam,
                        email : req.body.email,
                        mobielnummer : req.body.mobielnummer,
                        wachtwoord: req.body.wachtwoord,
                        studierichting : req.body.studierichting,
                        mentor: req.body.mentor
                    })
                    .then(() => res.status(200).send(student))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    destroy(req, res) {
        return student
            .findById(req.params.email)
            .then(student => {
                if (!student) {
                    return res.status(400).send({
                        message: 'Student niet gevonden',
                    });
                }
                return student
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
};
