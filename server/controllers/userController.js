const db = require('../models')
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
// create main Model
const User = db.users


// main work

// 1. create user


const addUser = async (req, res) => {

    const salt = genSaltSync(10);
    req.body.password = hashSync(req.body.password, salt);

    let userInfo = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        emailId: req.body.emailId,
    
       password: req.body.password 
    }

    const user = await User.create(userInfo)
    res.status(200).send(user)
    console.log(user)

}



// 2. get all users

const getAllUsers = async (req, res) => {

    let users = await User.findAll({})
    res.status(200).send(users)

}

//

// const getUserByEmail= async (req, res) => {

//     //let emailId = req.body.emailId //is an object in Node.js that contains the parameters passed to a route URL with a dynamic segment.
//     let users = await User.findOne({ where: { emailId: req.body.emailId}})
//     if(users === null)
//     res.send("user not found")
//     res.status(200).send(users)

// }

const login =async (req,res) =>{
    let users = await User.findOne({ where: { emailId: req.body.emailId}})
    
    if(users === null){
    res.send("user not found")
    }
    
    else{
      const result = compareSync(req.body.password, users.password);

      if(result){
        users.password = undefined;
        const jsontoken = jsonwebtoken.sign({result: users}, "qwe1234",{expiresIn:'1h'});
        return res.json({
          success: 1,
          msg : "login successful",
          token : jsontoken
        })
      }
      else{
        return res.json({
          success :0,
          msg : "invalid password"
        })
      }
    }
}



module.exports = {
    addUser,
    getAllUsers,
    login
}