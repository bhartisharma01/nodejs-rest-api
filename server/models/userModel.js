module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("User", {
       
        firstName: {
            type: DataTypes.STRING,
            
        },
        lastName: {
            type: DataTypes.STRING,
           
        },
        age:{
            type: DataTypes.INTEGER,
           
        },
        emailId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    
    })

    return User

}