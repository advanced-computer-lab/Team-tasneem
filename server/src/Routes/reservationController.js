const user = require('../models/user');
const flight = require('../models/flight');
const reservation = require('../models/reservation')
const mongoose = require('mongoose');
var reservationModel = mongoose.model('reservation', reservation.ReservationSchema);
var express = require('express');
var reservationController = express.Router();

// printing
const chalk = require('chalk');

reservationController.post('/reserve-flight', (req,res)=> {
    console.log("starting");
    console.log(req.body);
    console.log("seats");
    // console.log(req.body);
    let ReservedSeats=[];
    
    if(req.body.searchCabin=='Economy' || req.body.searchCabin=='economy') {
        let tempSeats=req.body.reservedEconomySeats;
    for(let i = 0; i < tempSeats.length; i++){
        if(tempSeats[i]!=0){
            console.log(ReservedSeats);
            console.log(tempSeats[i]);
            console.log(req.body.chosenFlight.availableEconomySeats);
            ReservedSeats = [...ReservedSeats,tempSeats[i]];
            
            for(let j = 0; j < req.body.chosenFlight.availableEconomySeats.length;j++){
                if(req.body.chosenFlight.availableEconomySeats[j]==tempSeats[i])
                    req.body.chosenFlight.availableEconomySeats.splice(j,1);
                }
            
        }
    }
        
}else if(req.body.searchCabin=='business'||req.body.searchCabin=='Business'){
    let tempSeats=req.body.reservedBusinessSeats;
    for(let i = 0; i < tempSeats.length; i++){
        if(tempSeats[i]!=0){
            console.log(ReservedSeats);
            console.log(tempSeats[i]);
            console.log(req.body.chosenFlight.availableBusinessSeats);
            ReservedSeats = [...ReservedSeats,tempSeats[i]];
            let size = req.body.chosenFlight.availableBusinessSeats.length;
            for(let j = 0; j < size;j++){
                if(req.body.chosenFlight.availableBusinessSeats[j]==tempSeats[i])
                    req.body.chosenFlight.availableBusinessSeats.splice(j,1);
                }
            // console.log(req.body.chosenFlight.availableBusinessSeats);
            
        }
    }
}else{
    let tempSeats=req.body.reservedFirstClassSeats;
    for(let i = 0; i < tempSeats.length; i++){
        if(tempSeats[i]!=0){
            console.log(ReservedSeats);
            console.log(tempSeats[i]);
            console.log(req.body.chosenFlight.availableFirstSeats);
            ReservedSeats = [...ReservedSeats,tempSeats[i]];
            let size=req.body.chosenFlight.availableFirstSeats.length;
            for(let j = 0; j < size;j++){
                if(req.body.chosenFlight.availableFirstSeats[j]==tempSeats[i])
                    req.body.chosenFlight.availableFirstSeats.splice(j,1);
                }
            // console.log(req.body.chosenFlight.availableFirstSeats);
        }
    }
}


let ReservedReturnSeats=[];
if(req.body.searchCabin=='Economy' || req.body.searchCabin=='economy') {
let tempSeats=req.body.reservedReturnEconomySeats;
for(let i = 0; i < tempSeats.length; i++){
    if(tempSeats[i]!=0){
        console.log(ReservedReturnSeats);
        console.log(tempSeats[i]);
        console.log(req.body.chosenReturnFlight.availableEconomySeats);
        ReservedReturnSeats = [...ReservedReturnSeats,tempSeats[i]];
        let size=req.body.chosenReturnFlight.availableEconomySeats.length;
        for(let j = 0; j < size;j++){
            if(req.body.chosenReturnFlight.availableEconomySeats[j]==tempSeats[i])
                req.body.chosenReturnFlight.availableEconomySeats.splice(j,1);
            }
        
    }
}
    
}else if(req.body.searchCabin=='business'||req.body.searchCabin=='Business'){
    let tempSeats=req.body.reservedReturnBusinessSeats;
for(let i = 0; i < tempSeats.length; i++){
    if(tempSeats[i]!=0){
        console.log(ReservedReturnSeats);
            console.log(tempSeats[i]);
            console.log(req.body.chosenReturnFlight.availableBusinessSeats);
        ReservedReturnSeats = [...ReservedReturnSeats,tempSeats[i]];
        let size=req.body.chosenReturnFlight.availableBusinessSeats.length;
        for(let j = 0; j < size;j++){
            if(req.body.chosenReturnFlight.availableBusinessSeats[j]==tempSeats[i])
                req.body.chosenReturnFlight.availableBusinessSeats.splice(j,1);
            }
            }
}
}else{
    let tempSeats=req.body.reservedReturnFirstClassSeats;
for(let i = 0; i < tempSeats.length; i++){
    if(tempSeats[i]!=0){
        console.log(ReservedReturnSeats);
            console.log(tempSeats[i]);
            console.log(req.body.chosenReturnFlight.availableFirstSeats);

        ReservedReturnSeats = [...ReservedReturnSeats,tempSeats[i]];
        let size=req.body.chosenReturnFlight.availableBusinessSeats.length;
        for(let j = 0; j < size;j++){
        if(req.body.chosenReturnFlight.availableFirstSeats[j]==tempSeats[i])
            req.body.chosenReturnFlight.availableFirstSeats.splice(j,1);
        }
    }
}
}
let data;
data = {
userEmail:"sallma99@icloud.com",
flightNumber:req.body.chosenFlight.flightNumber,
returnFlightNumber:req.body.chosenReturnFlight.flightNumber,
totalPrice:req.body.totalPrice,
reservedSeats: ReservedSeats,
returnReservedSeats:ReservedReturnSeats,
ticketType:req.body.searchCabin
}
console.log("data");
console.log(data);
console.log("reserving");
const newReservation = new reservation(data);
    console.log(newReservation);
    newReservation.save()
        .then(result => {
          res.status(200).send(result);
          console.log(chalk.bold.green("The reservation was created successfully !"));
          res.end();

        })
        .catch(err => {
          console.log(err);
        });
        console.log("updating");
        console.log(req.body.chosenFlight);
        console.log(req.body.chosenReturnFlight);
        flight.updateOne({flightNumber:req.body.chosenFlight.flightNumber}, 
            req.body.chosenFlight)
          .then(result =>{
              res.status(200).send("flight updated");
              console.log(chalk.bold.blue('The flight is Updated successfully !'));
          }).catch(err => {
              console.log(err);
            });
            flight.updateOne({flightNumber:req.body.chosenReturnFlight.flightNumber}, 
                req.body.chosenReturnFlight)
              .then(result =>{
                  res.status(200).send("flight updated");
                  console.log(chalk.bold.blue('The flight is Updated successfully !'));
              }).catch(err => {
                  console.log(err);
                });

}
);

reservationController.delete('/view-and-cancel-reservations',async (req,res)=>{
       console.log(req.body);
       console.log(req.body.reservedSeats);
       let result=[];
       const searchFlight = await flight.find({flightNumber:req.body.flightNumber})
            .then(res => {
                result=res;
                console.log("flight found");
                // res.end();
}
).catch(err => {
    console.log("error in reservation cancelation");
    console.log(err);
});


if(req.body.ticketType=="business"||req.body.ticketType=="Business"){
        console.log("business");
    for(let i = 0 ; i < req.body.reservedSeats.length; i++){
        let seat = req.body.reservedSeats[i];
        for(let j = 0 ; j < result[0].availableBusinessSeats.length;j++){
            if(seat < result[0].availableBusinessSeats[j]){
                result[0].availableBusinessSeats.splice(j, 0, seat);
                break;
            }
        }
    }
    console.log("updating flight");
    console.log(result[0].availableBusinessSeats);
flight.updateOne({flightNumber:req.body.flightNumber}, 
{availableBusinessSeats:result[0].availableBusinessSeats})
.then(result =>{
// res.status(200).send("flight updated");
console.log(chalk.bold.blue('The flight is Updated successfully !'));
}).catch(err => {
console.log(err);
});
}else if(req.body.ticketType=="economy"||req.body.ticketType=="Economy"){
    console.log("economy");
    console.log(req.body.reservedSeats);
    console.log(result[0].availableEconomySeats);
for(let i = 0 ; i < req.body.reservedSeats.length; i++){
let seat = req.body.reservedSeats[i];
console.log("seat: ")
console.log(seat);
console.log(result[0].availableEconomySeats);
console.log(result[0].availableEconomySeats.length);
for(let j = 0 ; j < result[0].availableEconomySeats.length;j++){
    // console.log(j);
    if(seat < result[0].availableEconomySeats[j]){
        
        result[0].availableEconomySeats.splice(j, 0, seat);
    break;
    }
}
}
console.log("updating flight");
console.log(result[0].availableEconomySeats);
flight.updateOne({flightNumber:req.body.flightNumber}, 
{availableEconomySeats:result[0].availableEconomySeats})
.then(result =>{
// res.status(200).send("flight updated");
console.log(chalk.bold.blue('The flight is Updated successfully !'));
}).catch(err => {
console.log(err);
});
}else{
    console.log("first class");
for(let i = 0 ; i < req.body.reservedSeats.length; i++){
let seat = req.body.reservedSeats[i];
for(let j = 0 ; j < result[0].availableFirstSeats.length;j++){
    if(seat < result[0].availableFirstSeats[j]){
        result[0].availableFirstSeats.splice(j, 0, seat);
        break;
    }
}
}
console.log("updating flight");
console.log(result[0].availableFirstSeats);
flight.updateOne({flightNumber:req.body.flightNumber}, 
{availableFirstSeats:result[0].availableFirstSeats})
.then(result =>{
// res.status(200).send("flight updated");
console.log(chalk.bold.blue('The flight is Updated successfully !'));
}).catch(err => {
console.log(err);
});
}


let result1=[];
       const searchReturnFlight = await flight.find({flightNumber:req.body.returnFlightNumber})
            .then(res => {
                result1=res;
                console.log("return flight found");
}
).catch(err => {
    console.log("error in reservation cancelation");
    console.log(err);
});


if(req.body.ticketType=="business"||req.body.ticketType=="Business"){
        
    for(let i = 0 ; i < req.body.returnReservedSeats.length; i++){
        let seat = req.body.returnReservedSeats[i];
        for(let j = 0 ; j < result1[0].availableBusinessSeats.length;j++){
            if(seat < result1[0].availableBusinessSeats[j]){
                result1[0].availableBusinessSeats.splice(j, 0, seat);
                break;
            }
        }
    }
    console.log(result1[0].availableBusinessSeats);
flight.updateOne({flightNumber:req.body.returnFlightNumber}, 
{availableBusinessSeats:result1[0].availableBusinessSeats})
.then(result =>{
// res.status(200).send("flight updated");
console.log(chalk.bold.blue('The flight is Updated successfully !'));
}).catch(err => {
console.log(err);
});
}else if(req.body.ticketType=="economy"||req.body.ticketType=="Economy"){
for(let i = 0 ; i < req.body.returnReservedSeats.length; i++){
let seat = req.body.returnReservedSeats[i];
for(let j = 0 ; j < result1[0].availableEconomySeats.length;j++){
    if(seat < result1[0].availableEconomySeats[j]){
        result1[0].availableEconomySeats.splice(j, 0, seat);
        break;
    }
}
}
console.log(result1[0].availableEconomySeats);
flight.updateOne({flightNumber:req.body.returnFlightNumber}, 
{availableEconomySeats:result1[0].availableEconomySeats})
.then(result =>{
// res.status(200).send("flight updated");
console.log(chalk.bold.blue('The flight is Updated successfully !'));
}).catch(err => {
console.log(err);
});
}else{
for(let i = 0 ; i < req.body.returnReservedSeats.length; i++){
let seat = req.body.returnReservedSeats[i];
for(let j = 0 ; j < result1[0].availableFirstSeats.length;j++){
    if(seat < result1[0].availableFirstSeats[j]){
        result1[0].availableFirstSeats.splice(j, 0, seat);
        break;
    }
}
}
console.log(result1[0].availableFirstSeats);
flight.updateOne({flightNumber:req.body.returnFlightNumber}, 
{availableFirstSeats:result1[0].availableFirstSeats})
.then(result =>{
// res.status(200).send("flight updated");
console.log(chalk.bold.blue('The flight is Updated successfully !'));
res.end();
}).catch(err => {
console.log(err);
});
}

console.log("deleting reservation");
console.log(req.body.userEmail);

reservation.findOneAndDelete({userEmail:req.body.userEmail,
    flightNumber:req.body.flightNumber,
returnFlightNumber:req.body.returnFlightNumber,
ticketType:req.body.ticketType
}).then(result =>{

res.status(200).send("reservation Deleted ");
console.log(chalk.bold.red("The reservation is deleted successfully !"));
res.end();
}

).catch(err => {
console.log(err);
});
});


reservationController.post('/view-and-cancel-reservations', (req, res) => {
    console.log("viewing");
    const viewReservation = reservation.find({})
        .then(result => {
            res.send(result);
            console.log(viewReservation);
            res.end();
        })
        .catch(err => {
          console.log(err);
        });
    });

module.exports = reservationController;