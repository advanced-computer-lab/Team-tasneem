import React from 'react'
import {useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import {Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import axios from "axios";

import SearchResults from './SearchResults'; 

export default function SearchFlights() {

    let history = useHistory();
    // const searchResult = useSelector(state=>state.searchflight)
    const [searchFlightNumber, setFlightNumber]=useState('');
    const [searchTo, setTo]=useState('');
    const [searchFrom, setFrom]=useState('');
    const [searchDepartureTime, setDepartureTime]=useState('');
    const [searchArrivalTime, setArrivalTime]=useState('');
    const [searchDepartureTerminal, setDepartureTerminal]=useState('');
    const [searchArrivalTerminal, setArrivalTerminal]=useState('');
    const [flights, setFlights] = useState([]);
    // const [searchResults, setSearchResults]=useState([]);
  
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
            <input
                value={searchFlightNumber}
                onChange={(e) => setFlightNumber(e.target.value)}
                type="text"
                placeholder="Flight Number" />
            <br></br><br></br>
            <input
                value={searchTo}
                onChange={(e) => setTo(e.target.value)}
                type="text"
                placeholder="To" />
            <br></br><br></br>
            <input
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
                    <p>Number of business seats: {flight.noOfBusinessSeats}</p> 
                    {/* attributes missing */}
                    </div>
                ))}
   </div>

    {/* <Switch>
          <Route path="/search-results">
           <SearchResults props = {flights}/>
         </Route> 
         </Switch>
    </Router> */}
        </>
   
)

}

// useEffect(() => {
        
    // return (
    //      <SearchResults flights = {flights}/>
    // )

    // }, []);

                // 



        //          this.setState({
        //       flightNumber: '',
        //       to:'',
        //       from:'',
        //       departureTime:Date,
        //       arrivalTime: Date,
        //       departureTerminal:Number,
        //       arrivalTerminal:Number
        //   })

    
   
        // document.title = `You clicked ${flightNumber} times`;
     
        // [flightNumber , to , from , departureTime , arrivalTime , departureTerminal , arrivalTerminal]
    
//     async function SearchFlights(event){
//         event.preventDefault();

    //     axios
    //     .post('http://localhost:8000/search-flights', data)
    //     .then(res => {
    //       this.setState({
    //           flightNumber: '',
    //           From:'', const displayFlight = (props) => {
    //           To:'',
    //           departureTime:Date,
    //           arrivalTime: Date,
    //           departureTerminal:Number,
    //           arrivalTerminal:Number
    //       })
    //       console.log("res");
    //       console.log(res);
    //       console.log(res.data);
    //       this.props.history.push('/search-flights',res);
      
    //   }
    //   )
    //     .catch(err => {
    //         console.log("error");
    //         console.log(err);
    //       console.log("Error in SearchFlight!");
    //     })
      

// const response = await fetch('http://localhost:8000/search-flights',{
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
//         departureTerminal,
//         arrivalTerminal
//     }),    
// }   
// )

// const data = await response.json();
// console.log("data");
// console.log(data);
//     }

//  console.log(data);