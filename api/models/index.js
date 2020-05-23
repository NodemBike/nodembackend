'use strict'

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
    },///uncomment for Azure db connection
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        idle: dbConfig.idle,
    },
});

const db = {} ;

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// adding the models to the db
db.Providers = require("./Providers.js")(sequelize, Sequelize);
db.States = require("./States.js")(sequelize, Sequelize);
db.Warranties = require("./Warranties.js")(sequelize, Sequelize);
db.Brands = require("./Brands.js")(sequelize, Sequelize);
db.Models = require("./Models.js")(sequelize, Sequelize);
db.RWheels = require("./RWheels.js")(sequelize, Sequelize);
db.FWheels = require("./FWheels.js")(sequelize, Sequelize);
db.Forks = require("./Forks.js")(sequelize, Sequelize);
db.Motors = require("./Motors.js")(sequelize, Sequelize);
db.Batteries = require("./Batteries.js")(sequelize, Sequelize);
db.Frames = require("./Frames.js")(sequelize, Sequelize);
db.Bikeparts = require("./Bikeparts.js")(sequelize, Sequelize);
db.Bikes = require("./Bikes.js")(sequelize, Sequelize);
db.Users = require("./Users.js")(sequelize, Sequelize);

/* Relations to providers
 BelongsTo associations are associations where the foreign key for the one-to-one relation exists on the source model.
User.belongsTo(Company); // Will add companyId to user

Project.hasOne(User)
In this example hasOne will add an attribute projectId to the User model!

*/

// Bike relations
// db.Brands.hasMany(db.Models); //Bike 
// db.Bikes.hasOne(db.Models);
// db.Types.hasMany(db.Bikes);
// db.States.hasMany(db.Bikes);
// db.Warranties.belongsTo(db.Bikes);


// //Providers
// db.Providers.hasMany(db.Forks);
// db.Providers.hasMany(db.RWheels);
// db.Providers.hasMany(db.FWheels);
// db.Providers.hasMany(db.Batteries);
// db.Providers.hasMany(db.Motors);
// db.Providers.hasMany(db.Frames); 

// // Bike Parts
// db.Forks.belongsTo(db.Bikeparts);
// db.RWheels.belongsTo(db.Bikeparts);
// db.FWheels.belongsTo(db.Bikeparts);
// db.Batteries.belongsTo(db.Bikeparts);
// db.Motors.belongsTo(db.Bikeparts);
// db.Frames.belongsTo(db.Bikeparts, {as: 'frames'});



Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.Bikes.sync();
module.exports = db;