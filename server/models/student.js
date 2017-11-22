module.exports = function(sequelize, DataTypes) {

    return sequelize.define('student', {

        voornaam: {
            type: DataTypes.STRING,
            notEmpty: true
        },

        tussenvoegsel: {
            type: DataTypes.STRING,
            notEmpty: true
        },

        achternaam: {
            type: DataTypes.STRING,
            notEmpty: true
        },

        email: {
            type: DataTypes.STRING,
            notEmpty: true,
            primaryKey: true
        },

        mobielnummer: {
            type: DataTypes.STRING,
            notEmpty: true
        },

        wachtwoord: {
            type: DataTypes.STRING,
            notEmpty: true
        },

        studierichting: {
            type: DataTypes.STRING,
            notEmpty: true
        },

        mentor: {
            type: DataTypes.STRING,
            notEmpty: true
        }
    }, {
        freezeTableName: true
    });
};