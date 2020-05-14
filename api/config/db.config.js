require('dotenv').config()
module.exports = {
    host: process.env.HOST,
    user: process.env.USER ,
    password: process.env.PSSWD,
    database: process.env.DB,
    dialect: process.env.DIALECT,
    port: process.env.PGPORT,
    ssl: true,
    pool: {
        max: 5, //max: maximum number of connection in pool
        min: 0, //min: minimum number of connection in pool
        acquire: 30000, // maximum time, in milliseconds, that pool will try to get connection before throwing error
        idle: 10000, // maximum time, in milliseconds, that a connection can be idle before being released
    }
};


