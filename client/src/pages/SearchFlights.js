import React from 'react'
import {useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import {Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import axios from "axios";

import SearchResults from './SearchResults'; 

export default function SearchFlights() {

    
    // const searchResult = useSelector(state=>state.searchflight)
    const [searchFlightNumber, setFlightNumber]=useState('');
    const [searchTo, setTo]=useState('');
    const [searchFrom, setFrom]=useState('');
    const [searchDepartureTime, setDepartureTime]=useState('');
    const [searchArrivalTime, setArrivalTime]=useState('');
    const [searchDepartureTerminal, setDepartureTerminal]=useState('');
    const [searchArrivalTerminal, setArrivalTerminal]=useState('');
    const [flights, setFlights] = useState([]);
    const [selectedBusinessSeats, setSelectedBusinessSeats] = useState([]);
    const [selectedFirstClassSeats, setSelectedFirstClassSeats] = useState([]);
    const [selectedEconomySeats, setSelectedEconomySeats] = useState([]);
    const [businessCheckBoxes, setBusinessCheckBoxes] = useState( new Array(chosenFlight.businessSeats.length).fill(false));
    const [economyCheckBoxes, setEconomyCheckBoxes] = useState( new Array(chosenFlight.economySeats.length).fill(false));
    const [firstClassCheckBoxes, setFirstClassCheckBoxes] = useState( new Array(chosenFlight.firstClassSeats.length).fill(false));
    const [chosenFlight, setChosenFlight] = useState({
                flightNumber:'',
        to:'',
        from:'',
        departureTime:'',
        arrivalTime:'',
        tripDuration:'',
        baggageAllowance:'',
        totalSeats:'',
        noOfEconomySeats:'',
        noOfFirstSeats:'',
        noOfBusinessSeats:'',
        economyPrice:'',
        businessPrice:'',
        firstClassPrice:'',
        returnFlightID:'',
        departureTerminal:'',
        arrivalTerminal:'',
        businessSeats:[],
        economySeats:[],
        firstClassSeats:[]
    });

  
    let addBusinessSeat = (seat,index) => {
        setSelectedBusinessSeats([...selectedBusinessSeats,seat]);

      };

      let addEconomySeat = (seat,index) => {
        setSelectedEconomySeats([...selectedEconomySeats,seat]);
      };
      let addFirstClassSeat = (seat,index) => {
        setSelectedFirstClassSeats([...selectedFirstClassSeats,seat]);
      };
    let showSeats = (selectedFlight) => {
        setChosenFlight(selectedFlight);
    }

    let data;
    let search = (e) => {
        e.preventDefault();
        
         data = {
          flightNumber: searchFlightNumber,
          to: searchTo,
          from: searchFrom,
          departureTime: searchDepartureTime,
          arrivalTime: searchArrivalTime,
          departureTerminal: searchDepartureTerminal,
          arrivalTerminal: searchArrivalTerminal
        };      

        axios
    .post('http://localhost:8000/search-flights',data)
    .then((result) => {
      console.log("res...");
      console.log(result.data);
      setFlights(result.data);
      
    //   history.push("/search-results",result.data);


    //   const { history } = this.props;
    //   history.push("/search-results",result.data)
    //   this.props.history.push("/search-results",result.data);
      
        // if (flights.length > 0 ){
        //     found=true; 
        // }
  }
  )
    .catch(err => {
        console.log("error...");
        console.log(err);
      console.log("Error in SearchFlight!");
    })
    }
    

            // result.data.map( (flight) => {
            //     console.log("flight..");
            //         return(
                        
            //             <>
            //                 <h1>Search Results </h1>
            //                 <p>{flight.flightNumber} </p>
            //                 <p>{flight.to} </p>
            //                 <p>{flight.from} </p>
            //                 <p>{flight.arrivalTime} </p>
            //             </>
            //        )
                    
            //     })

return (
    <>
    <div>
        <h1>Search Flight</h1>

        <form onSubmit={search}>
            <label for="number"> Enter Flight Number:</label><br></br><br></br>
            <input id= "number"
                value={searchFlightNumber}
                onChange={(e) => setFlightNumber(e.target.value)}
                type="text"
                placeholder="Flight Number" />
            <br></br><br></br>
            <label for="to">
                Please enter the country you want to visit in this form: CAI, LAX, etc..
                </label><br></br><br></br>
            <input id="to"
                value={searchTo}
                onChange={(e) => setTo(e.target.value)}
                type="text"
                placeholder="To" />
            <br></br><br></br>
            <label for="from">Please enter the country you're coming from in this form: CAI, LAX, etc..</label>
            <br></br>
            <input id="from"
                value={searchFrom}
                onChange={(e) => setFrom(e.target.value)}
                type="text"
                placeholder="From" />

            <br></br><br></br>

            <input
                value={searchDepartureTime}
                onChange={(e) => setDepartureTime(e.target.value)}
                type="date"
                placeholder="Departure Time" />

            <br></br><br></br>

            <input
                value={searchArrivalTime}
                onChange={(e) => setArrivalTime(e.target.value)}
                type="date"
                placeholder="Arrival Time" />

            <br></br><br></br>

            <input
                value={searchDepartureTerminal}
                onChange={(e) => setDepartureTerminal(e.target.value)}
                type="number"
                placeholder="Departure Terminal" />

            <br></br><br></br>

            <input
                value={searchArrivalTerminal}
                onChange={(e) => setArrivalTerminal(e.target.value)}
                type="number"
                placeholder="Arrival Terminal" />

            <br></br><br></br>

            <input type="submit" value="search">
                </input>


        </form>
        <div />
       
        
    </div>
   <div>
   {flights.map((flight) => (
                
                <div key={flight.flightNumber} className="flight">
                    <h1>Search Result</h1>
                    <p>Flight Number: {flight.flightNumber}</p>
                    <br></br>
                    <p>From: {flight.from}</p>
                    <br></br>
                    <p>To: {flight.to}</p>
                    <br></br>
                    <p>Departure Time: {flight.departureTime}</p>
                    <br></br>
                    <p>arrivalTime: {flight.arrivalTime}</p>
                    <br></br>
                    <p>Departure Terminal: {flight.departureTerminal}</p>
                    <br></br>
                    <p>Arrival Terminal: {flight.arrivalTerminal}</p>
                    <br></br>
                    <p>Number of remaining busuiness seats: {flight.noOfBusinessSeats}</p>
                    <br></br>
                    <p>Business ticket price: {flight.businessPrice}</p>
                    <br></br>
                    <p>Number of remaining economy seats: {flight.noOfEconomySeats}</p>
                    <br></br>
                    <p>Economy ticket price: {flight.economyPrice}</p>
                    <br></br>
                    <p>Number of remaining first class seats: {flight.noOfFirstSeats}</p>
                    <br></br>
                    <p>First class ticket price: {flight.firstClassPrice}</p>
                    <br></br>
                    <p>Baggage Allowance: {flight.baggageAllowance}</p>
                    <br></br>
                    <p>Trip duration: {flight.tripDuration}</p>
                    <br></br>
                    <p>Return flight ID: {flight.returnFlightID}</p>
                    <br></br>
                    <button onClick={showSeats(flight)}>Reserve Flight</button>;
                    </div>
                ))}
   </div>
   <div>
       <h1>Available business seats for flight</h1>
       {flights.businessSeats.map((seat, index) =>(
            <div className="topping">
        <input
          type="checkbox"
          id={"seat"+index+1}
          name="seat"
          value={"seat " + index+1}
          checked={businessCheckBoxes[index]}
          onChange={addBusinessSeat(seat,index)} //callback fn????
        />
        seat {index}
       </div>

       
       
       ))}
   </div>

   <div>
       <h1>Available first class seats for flight</h1>
       {chosenFlight.firstClassSeats.map((seat, index) =>(
            <div className="topping">
        <input
          type="checkbox"
          id={"seat"+index+1}
          name="seat"
          value={"seat " + index+1}
          checked={firstClassCheckBoxes[index]}
          onChange={addFirstClassSeat(seat,index)}
        />
        seat {index}
       </div>

       
       
       ))}
   </div>

   <div>
       <h1>Available economy seats for flight</h1>
       {chosenFlight.economySeats.map((seat, index) =>(
            <div className="topping">
        <input
          type="checkbox"
          id={"seat"+index+1}
          name="seat"
          value={"seat " + index+1}
          checked={economyCheckBoxes[index]}
          onChange={addEconomySeat(seat,index)}
        />
        seat {index}
       </div>

       
       
       ))}
   </div>

    {/* <Switch>
          </Switch>
    </Router> */}
        </>
   
)

}
