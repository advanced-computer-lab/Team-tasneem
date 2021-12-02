import React from 'react'
import {useLocation} from 'react-router-dom';


export default function SearchResults(props) {
    // const location = useLocation();
    // console.log("results");
    // console.log(location);
    // console.log("end");
    // return (
    //     <>
    //     <div> 
    //     <h1>Search Results</h1>    
    //     </div>
    //     <div> 
    //     location = {location.pathname}    
    //     </div>
    //     <div> 
    //     {/* from = {location.state.from}     */}
    //     </div>
    //     </>
    // )


    
    const {flights} = props;
   {flights.map((flight) => (

                <div key={flight.from} className="flight">
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
                    {/* <p>B seats: {flight.availableBusinessSeats}</p> */}
                    <button onClick={(event) => {showSeats(event,flight)}}>Reserve Flight</button>
                    </div>
                ))}
   
   

   return(
       <>
        <h1>THIS IS SEARCH</h1>

                <div className="container-fluid">
                            {this.displayFlight()}
                </div>
       </>
   )

}
