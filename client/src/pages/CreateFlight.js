import React from 'react'
import {useState  } from 'react';
import axios from "axios";

export default function CreateFlight() {

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
  

   
    async function addFlight(event){
        event.preventDefault();
const response = await fetch('http://localhost:8000/add-flights',{
    method:'POST',
    headers: {
        'Content-Type':'application/json',
    },
    body: JSON.stringify({
        flightNumber,
        to,
        from,
        departureTime,
        arrivalTime,
        tripDuration,
        baggageAllowance,
        totalSeats,
        noOfEconomySeats,
        noOfFirstSeats,
        noOfBusinessSeats,
        economyPrice,
        businessPrice,
        firstClassPrice,
        returnFlightID,
        departureTerminal,
        arrivalTerminal
    }),    
})

const data = await response.json();
console.log(data);
axios
      .post('http://localhost:8000/add-flights', data)
      .then(res => {
        this.setState({
            flightNumber: '',
            From:'',
            To:'',
            departureTime:Date,
            arrivalTime: Date,
            tripDuration: Number ,
            baggageAllowance:Number,
            totalSeats:Number,
            noOfEconomySeats: Number,
            noOfBussinessSeats: Number,
            noOfFirstSeats: Number,
            businessPrice:Number,
            firstClassPrice:Number,
            economyPrice:Number,
            returnFlightID:Number,
            departureTerminal:Number,
            arrivalTerminal:Number
    
        })
        this.props.history.push('/');
        
      })
      .catch(err => {
        console.log("Error in CreateFlight!");
      })
    }
    
    return (
        <div>
            <h1>Add Flight</h1>
            <form onSubmit={addFlight}>
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


                <input type="submit" value="add flight">
                </input>

                <br></br><br></br>

                </form>

        </div>
    )
}
