import React from 'react'
import {useState } from 'react';
//import axios from "axios";

export default function DeleteFlights() {
    const [flightNumber, setFlightNumber]=useState('');

    async function deleteFlight(event){
        event.preventDefault();
       
const response = await fetch('http://localhost:8000/delete-flights',{
    method:'DELETE',
    headers: {
        'Content-Type':'application/json',
    },
    body: JSON.stringify({
        
        flightNumber
       
    }), 

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
