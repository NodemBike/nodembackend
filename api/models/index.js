'use strict'

const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    /*dialectOptions: {
        //encrypt: true,
        ssl: {
            "require": false
        } 
    },*///uncomment for Azure db connection
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
db.Providers = require("./Providers.js")(sequelize, Sequelize);
db.States = require("./Providers.js")(sequelize, Sequelize);
db.Warranties = require("./Warranties.js")(sequelize, Sequelize);
db.Types = require("./Types.js")(sequelize, Sequelize);
db.Brands = require("./Brands.js")(sequelize, Sequelize);
db.Models = require("./Models.js")(sequelize, Sequelize,db.Brands);
db.RWheels = require("./RWheels.js")(sequelize, Sequelize, db.Providers);
db.FWheels = require("./FWheels.js")(sequelize, Sequelize, db.Providers);
db.Forks = require("./Forks.js")(sequelize, Sequelize, db.Providers);
db.Motors = require("./Motors.js")(sequelize, Sequelize, db.Providers);
db.Batteries = require("./Batteries.js")(sequelize, Sequelize, db.Providers);
db.Frames = require("./Frames.js")(sequelize, Sequelize, db.Providers);
db.Bikeparts = require("./Bikeparts.js")(sequelize, Sequelize,db);
db.Bikes = require("./Bikes.js")(sequelize, Sequelize,db);
db.Users = require("./Users.js")(sequelize, Sequelize,db);

// relations
db.RWheels.hasMany(db.Providers);
db.FWheels.hasMany(db.Providers);
db.Forks.hasMany(db.Providers);
db.Motors.hasMany(db.Providers);
db.Batteries.hasMany(db.Providers);
db.Frames.hasMany(db.Providers);

module.exports = db;