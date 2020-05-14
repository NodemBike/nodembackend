const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    dialectOptions: {
        encrypt: true,
        ssl: {
            "require": false
        }
    },
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.acquire,
        idle: dbConfig.idle,
    },
});

const db = {} ;

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// adding the models to the db
db.Users = require("./Users.js");
db.Bikes = require("./Bikes.js");
module.exports = db;