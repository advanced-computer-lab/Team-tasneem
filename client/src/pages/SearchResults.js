import React from 'react'
import {useLocation} from 'react-router-dom';


export default function SearchResults() {
    const location = useLocation();
    console.log("results");
    console.log(location);
    console.log("end");
    return (
        <>
        <div> 
        <h1>Search Results</h1>    
        </div>
        <div> 
        location = {location.pathname}    
        </div>
        <div> 
        {/* from = {location.state.from}     */}
        </div>
        </>
    )
}
