/**
 * 
 * models are responsible for representing and managing data in an application.
 * they interact with a db or other data storage sys to retrieve and manipulate data.
 * independent of user interface and business logic
 * easy to use across different parts of the application
 */


module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define("product", {
       
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        },
       
    
    })

    return Product

}

/**
 * sequelize.define() is a method that is used to define a new model that maps to a specific database table. 
 * The method takes two arguments: the name of the model, and an object that defines the model's attributes and options.
 */