//minute 20:47

import React from 'react'
import {useState, useLocation, useHistory } from 'react';
import {Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import axios from "axios";
import SearchResults from './SearchResults'; 

export default function SearchFlights() {

    // const searchResult = useSelector(state=>state.searchflight)
    const [flightNumber, setFlightNumber]=useState('');
    const [to, setTo]=useState('');
    const [from, setFrom]=useState('');
    const [departureTime, setDepartureTime]=useState('');
    const [arrivalTime, setArrivalTime]=useState('');
    const [departureTerminal, setDepartureTerminal]=useState('');
    const [arrivalTerminal, setArrivalTerminal]=useState('');
    // const [searchResults, setSearchResults]=useState([]);
  
    
    async function SearchFlights(event){
        event.preventDefault();

    //     axios
    //     .post('http://localhost:8000/search-flights', data)
    //     .then(res => {
    //       this.setState({
    //           flightNumber: '',
    //           From:'',
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
      

const response = await fetch('http://localhost:8000/search-flights',{
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
        departureTerminal,
        arrivalTerminal
    }),    
}   
)

const data = await response.json();
console.log("data");
console.log(data);
    }



    
   

//  console.log(data);
    

return (
   
    
    
    <><div>
        <h1>Search Flight</h1>

        <form onSubmit={SearchFlights}>
            <input
                value={flightNumber}
                onChange={(e) => setFlightNumber(e.target.value)}
                type="text"
                placeholder="Flight Number" />
            <br></br><br></br>
            <input
                value={to}
                onChange={(e) => setTo(e.target.value)}
                type="text"
                placeholder="To" />
            <br></br><br></br>
            <input
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                type="text"
                placeholder="From" />

            <br></br><br></br>

            <input
                value={departureTime}
                onChange={(e) => setDepartureTime(e.target.value)}
                type="date"
                placeholder="Departure Time" />

            <br></br><br></br>

            <input
                value={arrivalTime}
                onChange={(e) => setArrivalTime(e.target.value)}
                type="date"
                placeholder="Arrival Time" />

            <br></br><br></br>

            <input
                value={departureTerminal}
                onChange={(e) => setDepartureTerminal(e.target.value)}
                type="number"
                placeholder="Departure Terminal" />

            <br></br><br></br>

            <input
                value={arrivalTerminal}
                onChange={(e) => setArrivalTerminal(e.target.value)}
                type="number"
                placeholder="Arrival Terminal" />

            <br></br><br></br>

            <input type="submit" value="search">
                </input>


        </form>
        <div />

        
    </div>
        {/* <Router>
            <Link to={
                {
                pathname: "/search-flights",
                state: {
                    from:"search-flights"
                }
            }
            }>search</Link> 
            <Switch>
                <Route path="/search-results">
                    <SearchFlights />
                </Route> 
             </Switch>

        </Router> */}
        </>
   
)

}
