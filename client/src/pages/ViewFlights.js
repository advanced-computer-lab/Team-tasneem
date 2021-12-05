import React from 'react'
import axios from "axios";

export default function ViewFlights() {

    async function ViewFlights(event){
    event.preventDefault();
    const response = await fetch('http://localhost:8000/view-flights',{
        method:'GET',
        headers: {
            'Content-Type':'application/json',
        }
    })
    
    const data = await response.json();
    console.log("data");
    console.log(data);
    
    
    
}
        
       
    return (
        <div>
            <h1>View Flights</h1>

            <form onSubmit={ViewFlights}>
            <input type="submit" value="list all flights">
                </input>
                </form>
            
        </div>
    )
}