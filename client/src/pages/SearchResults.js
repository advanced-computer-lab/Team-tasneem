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


    const displayFlight = (props) => {
        const {flights} = props;

        if (flights.length > 0 ){
            return(
                flights.map( (flight , index) => {
                    console.log(flight);
                    return(
                        <div className="flight">
                            <p>{flight.flightNumber} </p>
                            <p>{flight.to} </p>
                            <p>{flight.from} </p>
                            <p>{flight.arrivalTime} </p>
                        </div>
                    )
                })
            )
        }
    }
}
