const user = require('../models/user');
const mongoose = require('mongoose');
var userModel = mongoose.model('user', user.UserSchema);
var express = require('express');
var userController = express.Router();
// printing
const chalk = require('chalk');

const admin = new user({
    userID: 1,
    username:"Tasneem", 
    firstName:"Tasneem",
    lastName: "Otaify",
    password:"123",
    isAdmin: true,
    email:"tasneem.otefy@student.guc.edu.eg",
    passportNumber:"A235678",
    countryCode:456,
    phoneNumber:345,
    creditCard:[12346]
    
});  

admin.save()
  .then(result => {
    // res.send(result);
    console.log("added");
  })
  .catch(err => {
    console.log(err);
  });
// userController.get('/',function(req,res){
//     res.send('Users Home Page')
// });

// userController.get('/user',function(req,res){
    
    
//   });

  
module.exports = userController;