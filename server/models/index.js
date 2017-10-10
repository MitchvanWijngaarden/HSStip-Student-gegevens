const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
const basename  = path.basename(module.filename);
const env       = 'development';
const config    = require('../config.json')[env];
const db        = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

fs
    .readdirSync(__dirname)
    .filter((file) => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach((file) => {
        const model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.log('Unable to connect to the database:', err);
    });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.bedrijf = require('./bedrijf')(sequelize, Sequelize);
db.student = require('./student')(sequelize, Sequelize);

module.exports = db;