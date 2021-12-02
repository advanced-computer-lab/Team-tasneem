import React from 'react'
import {useState} from 'react';
import axios from "axios";
import PopUp from "./PopUp";

export default function CreateFlight() {
  //add link tag to button to navigate
    const [flightNumber, setFlightNumber]=useState('');
    const [to, setTo]=useState('');
    const [from, setFrom]=useState('');
    const [departureTime, setDepartureTime]=useState('');
    const [arrivalTime, setArrivalTime]=useState('');
    const [tripDuration, setTripDuration]=useState('');
    const [baggageAllowance, setBaggageAllowance]=useState('');
    const [totalSeats, setTotalSeats]=useState('');
    const [noOfEconomySeats, setNoOfEconomySeats]=useState('');
    const [noOfFirstSeats, setNoOfFirstSeats]=useState('');
    const [noOfBusinessSeats, setNoOfBusinessSeats]=useState('');
    const [economyPrice, setEconomyPrice]=useState('');
    const [businessPrice, setBusinessPrice]=useState('');
    const [firstClassPrice, setFirstClassPrice]=useState('');
    const [returnFlightID, setReturnFlightID]=useState('');
    const [departureTerminal, setDepartureTerminal]=useState('');
    const [arrivalTerminal, setArrivalTerminal]=useState('');
    const [addedPopUp, setAddedPopUp] = useState(false);
    const [errorPopUp, setErrorPopUp] = useState(false);
   
    const [returnFlightNumber, setReturnFlightNumber]=useState('');
    const [returnTo, setReturnTo]=useState('');
    const [returnFrom, setReturnFrom]=useState('');
    const [returnDepartureTime, setReturnDepartureTime]=useState('');
    const [returnArrivalTime, setReturnArrivalTime]=useState('');
    const [returnTripDuration, setReturnTripDuration]=useState('');
    const [returnBaggageAllowance, setReturnBaggageAllowance]=useState('');
    const [returnTotalSeats, setReturnTotalSeats]=useState('');
    const [returnNoOfEconomySeats, setReturnNoOfEconomySeats]=useState('');
    const [returnNoOfFirstSeats, setReturnNoOfFirstSeats]=useState('');
    const [returnNoOfBusinessSeats, setReturnNoOfBusinessSeats]=useState('');
    const [returnEconomyPrice, setReturnEconomyPrice]=useState('');
    const [returnBusinessPrice, setReturnBusinessPrice]=useState('');
    const [returnFirstClassPrice, setReturnFirstClassPrice]=useState('');
    
    const [returnDepartureTerminal, setReturnDepartureTerminal]=useState('');
    const [returnArrivalTerminal, setReturnArrivalTerminal]=useState('');
   
    let data;
    let createFlight = (e) => {

        e.preventDefault();
        console.log("adding....");
        setAddedPopUp(false);
        setErrorPopUp(false);
       
       
    if(flightNumber==''||to==''||from==''
        ||departureTime==''||arrivalTime==''||
        departureTerminal==''||arrivalTerminal==''||
        tripDuration==''||baggageAllowance==''||
        totalSeats==''||noOfBusinessSeats==''||noOfEconomySeats==''
        ||noOfFirstSeats==''||economyPrice==''||businessPrice==''
        ||firstClassPrice==''||arrivalTerminal==''
        ||departureTerminal==''||returnFlightID==''){
            setErrorPopUp(true);
            setAddedPopUp(false);
            console.log("Cond 1");
            return;
        }

        if(returnTo==''||returnFrom==''
        ||returnDepartureTime==''||returnArrivalTime==''||
        returnDepartureTerminal==''||returnArrivalTerminal==''||
        returnTripDuration==''||returnBaggageAllowance==''||
        returnTotalSeats==''||returnNoOfBusinessSeats==''||returnNoOfEconomySeats==''
        ||returnNoOfFirstSeats==''||returnEconomyPrice==''||returnBusinessPrice==''
        ||returnFirstClassPrice==''||returnArrivalTerminal==''
        ||returnDepartureTerminal==''){
            setErrorPopUp(true);
            setAddedPopUp(false);
            
            console.log("Cond 2");
            return;
        }
       
        data = {
            flightNumber: flightNumber,
            to: to,
            from: from,
            departureTime: departureTime,
            arrivalTime: arrivalTime,
            departureTerminal: departureTerminal,
            arrivalTerminal: arrivalTerminal,
            tripDuration: tripDuration ,
            baggageAllowance:baggageAllowance,
            totalSeats:totalSeats,
            noOfEconomySeats: noOfEconomySeats,
            noOfBusinessSeats: noOfBusinessSeats,
            noOfFirstSeats: noOfFirstSeats,
            businessPrice:businessPrice,
            firstClassPrice:firstClassPrice,
            economyPrice:economyPrice,
            returnFlightID:returnFlightID,
            availableBusinessSeats:[], 
            availableEconomySeats:[],
            availableFirstClassSeats:[],
            returnTo: returnTo,
            returnFrom: returnFrom,
            returnDepartureTime: returnDepartureTime,
            returnArrivalTime: returnArrivalTime,
            returnDepartureTerminal: returnDepartureTerminal,
            returnArrivalTerminal: returnArrivalTerminal,
            returnTripDuration: returnTripDuration ,
            returnBaggageAllowance:returnBaggageAllowance,
            returnTotalSeats:returnTotalSeats,
            returnNoOfEconomySeats: returnNoOfEconomySeats,
            returnNoOfBusinessSeats: returnNoOfBusinessSeats,
            returnNoOfFirstSeats: returnNoOfFirstSeats,
            returnBusinessPrice:returnBusinessPrice,
            returnFirstClassPrice:returnFirstClassPrice,
            returnEconomyPrice:returnEconomyPrice,
            returnAvailableBusinessSeats:[], 
            returnAvailableEconomySeats:[],
            returnAvailableFirstClassSeats:[]

          };  

       axios
      .post('http://localhost:8000/add-flights', data)
      .then(res => {
        setAddedPopUp(true);
        console.log("added");
        console.log(res.data);
        // this.props.history.push('/');
       
      })
      .catch(err => {
        console.log("Error in CreateFlight!");
        setErrorPopUp(true);
        console.log(err);
      })
    }

    
   
    return (
        <div>
            <h1>Add Flight</h1>
            <form onSubmit={(event) => {createFlight(event)}}>
                <input
                value={flightNumber}
                onChange={(e) => setFlightNumber(e.target.value)}
                type="text"
                placeholder="Flight Number"
                />
                   <br></br><br></br>
                <input
                value={to}
                onChange={(e) => setTo(e.target.value)}
                type="text"
                placeholder="To"
                />
                <br></br><br></br>
                <input
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                type="text"
                placeholder="From"
                />

                <br></br><br></br>
               
                <input
                value={departureTime}
                onChange={(e) => setDepartureTime(e.target.value)}
                type="date"
                placeholder="Departure Time"
                />

                <br></br><br></br>

                <input
                value={arrivalTime}
                onChange={(e) => setArrivalTime(e.target.value)}
                type="date"
                placeholder="Arrival Time"
                />

                <br></br><br></br>

                <input
                value={tripDuration}
                onChange={(e) => setTripDuration(e.target.value)}
                type="number"
                placeholder="Trip Duration"
                />

                <br></br><br></br>

                <input
                value={baggageAllowance}
                onChange={(e) => setBaggageAllowance(e.target.value)}
                type="number"
                placeholder="Baggage Allowance"
                />

                <br></br><br></br>

                <input
                value={totalSeats}
                onChange={(e) => setTotalSeats(e.target.value)}
                type="number"
                placeholder="Total Seats"
                />

                <br></br><br></br>

                <input
                value={noOfBusinessSeats}
                onChange={(e) => setNoOfBusinessSeats(e.target.value)}
                type="number"
                placeholder="Number Of Business Class Seats"
                />

                <br></br><br></br>

                <input
                value={noOfEconomySeats}
                onChange={(e) => setNoOfEconomySeats(e.target.value)}
                type="number"
                placeholder="Number Of Economy Seats"
                />

                <br></br><br></br>

                <input
                value={noOfFirstSeats}
                onChange={(e) => setNoOfFirstSeats(e.target.value)}
                type="number"
                placeholder="Number Of First Class Seats"
                />

                <br></br><br></br>

                <input
                value={economyPrice}
                onChange={(e) => setEconomyPrice(e.target.value)}
                type="number"
                placeholder="Economy Seat Price"
                />
           
            <br></br><br></br>

            <input
                value={businessPrice}
                onChange={(e) => setBusinessPrice(e.target.value)}
                type="number"
                placeholder="Business Seat Price"
                />

                <br></br><br></br>

                <input
                value={firstClassPrice}
                onChange={(e) => setFirstClassPrice(e.target.value)}
                type="number"
                placeholder="First Class Seat Price"
                />

                <br></br><br></br>

                <input
                value={returnFlightID}
                onChange={(e) => setReturnFlightID(e.target.value)}
                type="number"
                placeholder="Return Flight ID"
                />

                <br></br><br></br>
                <input
                value={arrivalTerminal}
                onChange={(e) => setArrivalTerminal(e.target.value)}
                type="number"
                placeholder="Arrival Terminal"
                />

                <br></br><br></br>
                <input
                value={departureTerminal}
                onChange={(e) => setDepartureTerminal(e.target.value)}
                type="number"
                placeholder="Departure Terminal"
                />


                <br></br><br></br>

                <input
                value={returnTo}
                onChange={(e) => setReturnTo(e.target.value)}
                type="text"
                placeholder="To"
                />
                <br></br><br></br>
                <input
                value={returnFrom}
                onChange={(e) => setReturnFrom(e.target.value)}
                type="text"
                placeholder="From"
                />

                <br></br><br></br>
               
                <input
                value={returnDepartureTime}
                onChange={(e) => setReturnDepartureTime(e.target.value)}
                type="date"
                placeholder="Departure Time"
                />

                <br></br><br></br>

                <input
                value={returnArrivalTime}
                onChange={(e) => setReturnArrivalTime(e.target.value)}
                type="date"
                placeholder="Arrival Time"
                />

                <br></br><br></br>

                <input
                value={returnTripDuration}
                onChange={(e) => setReturnTripDuration(e.target.value)}
                type="number"
                placeholder="Trip Duration"
                />

                <br></br><br></br>

                <input
                value={returnBaggageAllowance}
                onChange={(e) => setReturnBaggageAllowance(e.target.value)}
                type="number"
                placeholder="Baggage Allowance"
                />

                <br></br><br></br>

                <input
                value={returnTotalSeats}
                onChange={(e) => setReturnTotalSeats(e.target.value)}
                type="number"
                placeholder="Total Seats"
                />

                <br></br><br></br>

                <input
                value={returnNoOfBusinessSeats}
                onChange={(e) => setReturnNoOfBusinessSeats(e.target.value)}
                type="number"
                placeholder="Number Of Business Class Seats"
                />

                <br></br><br></br>

                <input
                value={returnNoOfEconomySeats}
                onChange={(e) => setReturnNoOfEconomySeats(e.target.value)}
                type="number"
                placeholder="Number Of Economy Seats"
                />

                <br></br><br></br>

                <input
                value={returnNoOfFirstSeats}
                onChange={(e) => setReturnNoOfFirstSeats(e.target.value)}
                type="number"
                placeholder="Number Of First Class Seats"
                />

                <br></br><br></br>

                <input
                value={returnEconomyPrice}
                onChange={(e) => setReturnEconomyPrice(e.target.value)}
                type="number"
                placeholder="Economy Seat Price"
                />
           
            <br></br><br></br>

            <input
                value={returnBusinessPrice}
                onChange={(e) => setReturnBusinessPrice(e.target.value)}
                type="number"
                placeholder="Business Seat Price"
                />

                <br></br><br></br>

                <input
                value={returnFirstClassPrice}
                onChange={(e) => setReturnFirstClassPrice(e.target.value)}
                type="number"
                placeholder="First Class Seat Price"
                />

                <br></br><br></br>

                <input
                value={returnArrivalTerminal}
                onChange={(e) => setReturnArrivalTerminal(e.target.value)}
                type="number"
                placeholder="Arrival Terminal"
                />

                <br></br><br></br>
                <input
                value={returnDepartureTerminal}
                onChange={(e) => setReturnDepartureTerminal(e.target.value)}
                type="number"
                placeholder="Departure Terminal"
                />

                <input type="submit" value="add flight">
                </input>

                <br></br><br></br>

                </form>
                <div>
            <PopUp trigger ={addedPopUp}>
                <p>Flight added successfully!</p>
            </PopUp>
        </div>
        <div>
            <PopUp trigger ={errorPopUp}>
                <p>please fill all the required fields</p>
            </PopUp>
        </div>

        </div>
       
    )
}

//         event.preventDefault();
// const response = await fetch('http://localhost:8000/add-flights',{
//     method:'POST',
//     headers: {
//         'Content-Type':'application/json',
//     },
//     body: JSON.stringify({
//         flightNumber,
//         to,
//         from,
//         departureTime,
//         arrivalTime,
//         tripDuration,
//         baggageAllowance,
//         totalSeats,
//         noOfEconomySeats,
//         noOfFirstSeats,
//         noOfBusinessSeats,
//         economyPrice,
//         businessPrice,
//         firstClassPrice,
//         returnFlightID,
//         departureTerminal,
//         arrivalTerminal
//     }),    
// })

// const data = await response.json();
// console.log(data);