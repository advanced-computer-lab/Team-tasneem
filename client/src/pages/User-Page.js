import {useState } from "react";
 import axios from "axios";
 import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
import { useHistory } from 'react-router-dom';

import UserSearch from "./UserSearch";


function UserHome() {


    return(

        <>

        <br></br> <br></br>
        <br></br>
        <br></br>
        <Router>
            <button>
                <Link to="/User-Search">
                Search available Flights
                </Link>
            </button>

            <Switch>
                <Route path="/User-Search">
                    <UserSearch/>
                </Route> 
            </Switch>
        </Router>

        </>
    )
    
}
export default UserHome;

