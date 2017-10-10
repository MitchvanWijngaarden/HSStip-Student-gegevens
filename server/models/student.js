module.exports = function(sequelize, Sequelize) {

    return sequelize.define('studenten', {

        voornaam: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        tussenvoegsel: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        achternaam: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        email: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        telefoonnummer: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        gebruikersnaam: {
            primaryKey: true,
            type: Sequelize.STRING
        },

        wachtwoord: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        studierichting: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        mentor: {
            type: Sequelize.STRING,
            notEmpty: true
        }
    }, {
        freezeTableName: true
    });
};