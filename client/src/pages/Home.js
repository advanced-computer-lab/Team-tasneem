import {useState } from "react";
 import axios from "axios";
 import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
import { useHistory } from 'react-router-dom';

import CreateFlight from './CreateFlight';
import ViewFlights from './ViewFlights';
import SearchFlights from './SearchFlights';
import DeleteFlights from './DeleteFlights';
import UpdateFlights from './UpdateFlights';
import AdminPage from "./Admin-page";
import UserPage from "./User-Page";

const Home = () => {
  return (
    <>

<div>
      <h1>Home Page</h1>
      <br />
      <ul>
        <li>
          <Link style={{textDecoration:'none' }} to="/">Home</Link>
        </li>
        <br></br>
        <li>
      
          <Link style={{textDecoration:'none' }} to="/admin-page">Admin page</Link>
        </li>
        <br></br>
        <li>
          <Link style={{textDecoration:'none' }} to="/User-Page">User page </Link>
        </li>
        <br></br>
        <li>
          <Link style={{textDecoration:'none' }} to="/create-user">User SignUp </Link>
        </li>
        
      </ul>
    </div>

    
     

    </>
  );
};
  

export default Home;