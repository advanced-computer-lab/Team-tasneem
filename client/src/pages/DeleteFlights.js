import axios from 'axios';
import React from 'react'
import {useState } from 'react';
//import axios from "axios";

export default function DeleteFlights() {
    const [flightNumber, setFlightNumber]=useState('');

    let deleteFlight = (event, flight) => {
        event.preventDefault();
        let data;
       axios.delete('http://localhost:8000/delete-flights',flightNumber)
       .then(result => {
            // setDeletedPopUp(true);
            console.log("deleted successfully");
       })
       .catch(err => {
           console.log("error in deleting flight");
           console.log(err);
       })
 } 
 return (
        <div>
            <h1>Delete Flight</h1>
            <form onSubmit={deleteFlight}>
                <input
                value={flightNumber}
                onChange={(e) => setFlightNumber(e.target.value)}
                type="text"
                placeholder="Flight Number to be deleted"
                />
               <button
    onClick={event =>
        window.confirm("Are you sure you wish to delete this item?") &&
        deleteFlight(event)
    }
>
    Delete
</button>
                
          </form>      
    </div>
    )
}