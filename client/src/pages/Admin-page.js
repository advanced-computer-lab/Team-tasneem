import {useState } from "react";
 import axios from "axios";
 import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
import { useHistory } from 'react-router-dom';





const AdminHome = () => {
  console.log("admin");

    return(
      <div>
      <h1>Admin home</h1>

      <ul >
            
      <li>
      <Link style={{textDecoration:'none' }} to="/add-flights">Add flight</Link>
      </li>
      <br></br><br></br>
      <li>
      <Link style={{textDecoration:'none' }} to="/list-flights">List all flights</Link>
      </li>
      <br></br><br></br>
      <li>
      <Link style={{textDecoration:'none' }} to="/search-flights">Search flights</Link>
      </li>
      <br></br><br></br>
      <li>
      <Link  style={{textDecoration:'none' }} to="/update-flights">Update a flight</Link>
      </li>
      <br></br><br></br>
      <li>
      <Link style={{textDecoration:'none' }} to="/delete-flights">Delete a flight </Link>
      </li>
</ul>
</div>
     
);
    
}
export default AdminHome;