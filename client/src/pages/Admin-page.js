import {useState } from "react";
 import axios from "axios";
 import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
import { useHistory } from 'react-router-dom';



const AdminHome = () => {
  return (
    

    <div>
      <h1>Admin home</h1>
      <ul >
            
            <button>
            <Link style={{textDecoration:'none' }} to="/add-flights">Add flight</Link>
            </button>
            <br></br><br></br>
            <button>
            <Link style={{textDecoration:'none' }} to="/list-flights">List all flights</Link>
            </button>
            <br></br><br></br>
            <button>
            <Link style={{textDecoration:'none' }} to="/search-flights">Search flights</Link>
            </button>
            <br></br><br></br>
            <button>
            <Link  style={{textDecoration:'none' }} to="/update-flights">Update a flight</Link>
            </button>
            <br></br><br></br>
            <button>
            <Link style={{textDecoration:'none' }} to="/delete-flights">Delete a flight </Link>
            </button>
      </ul>
    </div>
  );
};

export default AdminHome;