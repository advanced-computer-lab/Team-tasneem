const user = require('../models/user');
const flight = require('../models/flight');
const mongoose = require('mongoose');
var userModel = mongoose.model('user', user.UserSchema);
var express = require('express');
var userController = express.Router();

// printing
const chalk = require('chalk');

// const admin = new user({
//     userID: 1,
//     username:"Tasneem", 
//     firstName:"Tasneem",
//     lastName: "Otaify",
//     password:"123",
//     isAdmin: true,
//     email:"tasneem.otefy@student.guc.edu.eg",
//     passportNumber:"A235678",
//     countryCode:456,
//     phoneNumber:345,
//     creditCard:[12346]
    
// });  

userController.post('/User-Search', async(req,res)=> {
  console.log("UserController");
  if(req.body.departureTime==''){
    req.body.departureTime = Date.today();
  }
  if(req.body.arrivalTime==''){
    let tempDate = new Date(req.body.departureTime);
    tempDate.setDate(tempDate.getDate()+7);
    req.body.arrivalTime=tempDate;
  }
  const UserSearch = await flight.find({
    from:req.body.from,
    to:req.body.to,
    departureTime:req.body.departureTime,
    arrivalTime:req.body.arrivalTime
  })
  .then(result => {
    console.log("UserSearching");
    res.send(JSON.stringify(result));
    console.log(result);
  })
  .catch(err => {
    console.log(err);
    console.log("Error in User Search");
  });
})

// admin.save()
//   .then(result => {
//     // res.send(result);
//     console.log("added");
//   })
//   .catch(err => {
//     console.log(err);
//   });


  
module.exports = userController;