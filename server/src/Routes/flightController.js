const flight = require('../models/flight');
const mongoose = require('mongoose');
var flightModel = mongoose.model('flight', flight.FlightSchema);
var express = require('express');
var flightController = express.Router();
// printing
const chalk = require('chalk');



flightController.get('/',function(req,res){
    res.send('Flights Home Page')
});

flightController.post('/add-flights', (req, res) => {
     
    const newFlight = new flight(req.body);
  console.log(newFlight);
  newFlight.save()
        .then(result => {
          res.status(200).send(result);
          console.log(chalk.bold.green("The flight was created successfully !"));
        })
        .catch(err => {
          console.log(err);
        });
    });
  

//get all flights
flightController.get('/view-flights', (req, res) => {
    console.log("viewing");
    const viewFlight = flight.find({})
        .then(result => {
            res.send(result);
            console.log(viewFlight);
        })
        .catch(err => {
          console.log(err);
        });
    });
  
  //Get a certain entered flight with known attributes
  flightController.post('/search-flights', async (req, res) => {
    //check nulls
    console.log("Controller: ");
   const searchFlight = await flight.find({flightNumber:req.body.flightNumber,
      departureTime:req.body.departureTime,
  arrivalTime:req.body.arrivalTime,
  arrivalTerminal:req.body.arrivalTerminal,
  departureTerminal:req.body.departureTerminal})
      .then(result => {
          console.log("Searching..");
          res.send(result);
          console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  });
    
    //Updating an existing flight
    flightController.put('/update-flights', (req,res)=>{
        console.log("updating");
      flight.updateOne({flightNumber:req.body.toBeUpdatedFlightNumber}, 
        req.body)
      .then(result =>{
          res.status(200).send("flight updated");
          console.log(chalk.bold.blue('The flight is Updated successfully !'));
      }).catch(err => {
          console.log(err);
        });
  
    });
  
    flightController.delete('/delete-flights', (req,res)=>{
       
            flight.findOneAndDelete({flightNumber:req.body.flightNumber}).then(result =>{
       
                res.status(200).send("flight Deleted ");
                console.log(chalk.bold.red("The flight is deleted successfully !"));
                
            }
     
      ).catch(err => {
          console.log(err);
        });
  
     
     });
  
module.exports = flightController;
