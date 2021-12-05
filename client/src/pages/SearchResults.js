import React from 'react'
import {useLocation, useState} from 'react';





    const SearchResults = () => {
        // const [flights, setFlights] = useState([]);
        // setFlights(useContext(context));

        if (flights.length > 0 ){
            return(
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
            )
        }else{
            <h1>No flights match your search criteria</h1>
        }
    
}
export default SearchResults;