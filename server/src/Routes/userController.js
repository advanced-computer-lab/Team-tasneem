const user = require('../models/user');
const flight = require('../models/flight');
const mongoose = require('mongoose');
const reservation = require('../models/reservation');
var express = require('express');
var userController = express.Router();

const sgMail = require("@sendgrid/mail");
const API_KEY="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";
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



userController.post('/email',(req, res) => {
  console.log("sending email");
  console.log(req.body);
  sgMail.setApiKey(API_KEY)
  const message={
  to: 'sallma99@icloud.com',
  from: 'sallmaashraf31@gmail.com',
  subject: 'Your deleted reservation: ',
  text: "Deleted reservation details:",
  html: '<h1>Deleted reservation details: </h1>',
};
sgMail.send(message)
.then(response => console.log('Email sent'))
.catch(err => console.log(err.message));
});

userController.put('/update-user', (req,res)=>{
  console.log("updating");
  
  user.updateOne({userID : req.body.toBeUpdatedUser}, req.body)
  .then(result =>{
    res.status(200).send("User updated");
    console.log(result);
    console.log(chalk.bold.blue('The User is Updated successfully !'));
    let data ={
      userEmail:req.body.email
    }
    reservation.update({userEmail:req.body.oldEmail},data)
  }).catch(err => {
    console.log(err);
  });

});

userController.post('/create-user', (req, res) => {

  let createUser = {
    userID : req.body.userID,
    username : req.body.username,
    email : req.body.email,
    password : req.body.password,
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    isAdmin : req.body.isAdmin,
    address : req.body.address,
    passportNumber : req.body.passportNumber,
    countryCode : req.body.countryCode,
    phoneNumber : req.body.phoneNumber,
    creditCard : req.body.creditCard 
  }

  const newUser = new user(createUser);
  console.log(newUser);
  newUser.save()
        .then(result => {
          res.status(200).send(result);
          console.log(chalk.bold.green("The User was created successfully !"));
        })
        .catch(err => {
          console.log(err);
        });


})

userController.post('/User-Search', async(req,res)=> {
  console.log("UserController");
  
  console.log(req.body);
  let data;
  if(req.body.departureTime){
 data={
    from:req.body.from,
    to:req.body.to,
    departueTime:req.body.departureTime
  }
}else{
 data = {
    from:req.body.from,
    to:req.body.to,
    arrivalTime:req.body.arrivalTime
  }
 
}
console.log(data);
const UserSearch = await flight.find(data)
  .then(result => {
    for(let i = 0; i< result.length; i++){
    if(req.body.cabin=="business"||req.body.cabin=="Business"){
      if(result[i].availableBusinessSeats.length < req.body.seats){
        result=result.splice(i,1);
      }
    }else if(req.body.cabin=="economy"||req.body.cabin=="Economy"){
      if(result[i].availableEconomySeats.length < req.body.seats){
        result=result.splice(i,1);
      }
    }else{
      if(result[0].availableFirstSeats.length < req.body.seats){
        result=result.splice(i,1);
      }
    }
  }
    console.log("UserSearching");
    res.send(JSON.stringify(result));
    res.end();
    console.log(result);
  })
  .catch(err => {
    console.log(err);
    console.log("Error in User Search");
  });
})


userController.post('/User-Login',(req,res)=>{
  user.findOne({email:req.body.email}).then(result =>{
    if(result.body.password==req.body.password){
      res.status(200).send("welcome");
      console.log(chalk.bold.red("Logged in user"));
    }else{
      res.status(500).send("incorrect password");
    }
}


).catch(err => {
console.log(err);
res.status(400).send("user does not exist");
});


});

module.exports = userController;