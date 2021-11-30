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

// const {route,port} = require('../Environment')





function Home() {


  

  let history = useHistory();

  const Admin = () => {
    history.push(AdminPage);
  }


  return(
  //   <div>
  //     <a href="http://localhost:3000/Admin-page">Admin Home Page</a>
  //     <button onClick={Admin}>Admin Home</button>
  // </div>

  <Router>
  <div style={{fontSize: 25}}>
      <Link to="/admin-page">
        Admin Home Page
      </Link>
  </div>

  <Switch>
          <Route exact path="/admin-page" component={AdminPage}>
           
         </Route> 
    </Switch>


    <br></br><br></br>

  <div style={{fontSize: 25}} >
    <Link to="/User-Page">
        User Home Page
    </Link>
  </div>

    
  
    <Switch>
          <Route path="/User-Page">
           <UserPage/>
         </Route> 
    </Switch>


  </Router>

  )




  }

export default Home;
