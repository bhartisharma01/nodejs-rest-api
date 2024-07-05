const dbConfig = require('../config/dbConfig.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize( //an object that represents the Sequelize instance that is used to interact with a particular database.
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle

        }
    }
)

// authentication
sequelize.authenticate() //function to connect database
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db ={} //empty object
db.Sequelize = Sequelize
db.sequelize = sequelize

db.products = require('./productModel.js')(sequelize, DataTypes)
db.users = require('./userModel.js')(sequelize, DataTypes)


/**
 * To create the actual table in the database, you need to call the sync() method. 
 * The sync() method takes care of creating or updating the table schema based on the model definition.
 * 
 * 
 * force: false will retain all the data in the database's table
 * force: true will create new table if doesn't exist
 * if exists then it will not retain old data 
*/
db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})

module.exports =db;










