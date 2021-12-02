const flight = require('../models/flight');
const mongoose = require('mongoose');
var flightModel = mongoose.model('flight', flight.FlightSchema);
var express = require('express');
var flightController = express.Router();
// printing
const chalk = require('chalk');



flightController.get('/',function(req,res){
    res.send('Flights Home Page')
    console.log("FLIGHTSSSS")
});

flightController.post('/add-flights', (req, res) => {
  const businessSeats=req.body.noOfBusinessSeats;
  let businessSeatsArray=[]
  for (let i = 0; i < businessSeats; i++ ) {
    businessSeatsArray[i]=i+1;

  }
  const economySeats=req.body.noOfEconomySeats;
  let economySeatsArray=[]
  for (let i = 0; i < economySeats; i++ ) {
    economySeatsArray[i]=i+1;

  }
  const firstSeats=req.body.noOfFirstSeats;
  let firstSeatsArray=[]
  for (let i = 0; i < firstSeats; i++ ) {
    firstSeatsArray[i]=i+1;
  }


   const returnBusinessSeats=req.body.returnNoOfBusinessSeats;
  let returnBusinessSeatsArray=[]
  for (let i = 0; i < returnBusinessSeats; i++ ) {
   returnBusinessSeatsArray[i]=i+1;

  }
  const returnEconomySeats=req.body.returnNoOfEconomySeats;
  let returnEconomySeatsArray=[]
  for (let i = 0; i < returnEconomySeats; i++ ) {
   returnEconomySeatsArray[i]=i+1;

  }
  const returnFirstSeats=req.body.returnNoOfFirstSeats;
  let returnFirstSeatsArray=[]
  for (let i = 0; i < returnFirstSeats; i++ ) {
   returnFirstSeatsArray[i]=i+1;
  }


 //  req.body.availableBusinessSeats=businessSeatsArray;
 //  req.body.availableEconomySeats=economySeatsArray;
 //  req.body.availableFirstSeats=firstSeatsArray;
  let departureFlight ={
         flightNumber:req.body.flightNumber,
         to: req.body.to,
         from: req.body.from,
         departureTime: req.body.departureTime,
         arrivalTime: req.body.arrivalTime,
         departureTerminal: req.body.departureTerminal,
         arrivalTerminal: req.body.arrivalTerminal,
         tripDuration: req.body.tripDuration ,
         baggageAllowance: req.body.baggageAllowance,
         totalSeats: req.body.totalSeats,
         noOfEconomySeats: req.body.noOfEconomySeats,
         noOfBusinessSeats: req.body.noOfBusinessSeats,
         noOfFirstSeats: req.body.noOfFirstSeats,
         businessPrice: req.body.businessPrice,
         firstClassPrice: req.body.firstClassPrice,
         economyPrice: req.body.economyPrice,
         returnFlightID: req.body.returnFlightID,
         availableBusinessSeats:businessSeatsArray, 
         availableEconomySeats:economySeatsArray,
         availableFirstClassSeats:firstSeatsArray
  }

  let returnFlight ={
   flightNumber:req.body.returnFlightID,
   to: req.body.returnTo,
   from: req.body.returnFrom,
   departureTime: req.body.returnDepartureTime,
   arrivalTime: req.body.returnArrivalTime,
   departureTerminal: req.body.returnDepartureTerminal,
   arrivalTerminal: req.body.returnArrivalTerminal,
   tripDuration: req.body.returnTripDuration ,
   baggageAllowance: req.body.returnBaggageAllowance,
   totalSeats: req.body.returnTotalSeats,
   noOfEconomySeats: req.body.returnNoOfEconomySeats,
   noOfBusinessSeats: req.body.returnNoOfBusinessSeats,
   noOfFirstSeats: req.body.returnNoOfFirstSeats,
   businessPrice: req.body.returnBusinessPrice,
   firstClassPrice: req.body.returnFirstClassPrice,
   economyPrice: req.body.returnEconomyPrice,
   returnFlightID: '',
   availableBusinessSeats:returnBusinessSeatsArray, 
   availableEconomySeats:returnEconomySeatsArray,
   availableFirstClassSeats:returnFirstSeatsArray
}

 const newFlight = new flight(departureFlight);
 const newReturnFlight = new flight(returnFlight);
 console.log(newFlight);
 console.log(newReturnFlight);
newFlight.save()
     .then(result => {
       res.status(200).send(result);
       console.log(chalk.bold.green("The flight was created successfully !"));

     })
     .catch(err => {
       console.log(err);
     });
 
     newReturnFlight.save()
     .then(result => {
       res.status(200).send(result);
       console.log(chalk.bold.green("The return flight was created successfully !"));

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
          res.send(JSON.stringify(result));
          console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  });
    
  // flightController.post('/User-Search', async(req,res)=> {
  //   console.log("UserController");
  //   const UserSearch = await flight.find({
  //     from:req.body.from,
  //     to:req.body.to,
  //     departureTime:req.body.departureTime,
  //     arrivalTime:req.body.arrivalTime
  //   })
  //   .then(result => {
  //     console.log("UserSearching");
  //     res.send(JSON.stringify(result));
  //     console.log(result);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     console.log("Error in User Search");
  //   });
  // })




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
