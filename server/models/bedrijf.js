module.exports = function(sequelize, Sequelize) {

    return sequelize.define('bedrijven', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        bedrijfsnaam: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        adres: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        postcode: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        stad: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        telefoonnummer: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        website: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        omschrijving: {
            type: Sequelize.TEXT
        }
    }, {
        freezeTableName: true
    });
};