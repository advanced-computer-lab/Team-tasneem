import {useState } from "react";
 import axios from "axios";
 import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
import { useHistory } from 'react-router-dom';

import UserSearch from "./UserSearch";


const UserHome = () => {


    return(

        <>
        <h1>This is User Page</h1>
        <ul>
            <li>
          <Link style={{textDecoration:'none' }} to="/">Home</Link>
            </li>

            <br></br><br></br>
            <li>
                <Link style={{textDecoration:'none' }} to="/User-Login">
                Login</Link>
            </li>
            
            <br></br><br></br>
            <li>
            <Link style={{textDecoration:'none' }} to="/User-Search">Search available flights</Link>
            </li>
            <br></br><br></br>
            
            <li>
                <Link style={{textDecoration:'none' }} to="/view-and-cancel-reservations">
                view my reservations</Link>
            </li>
            <br></br><br></br>
            <li>
                <Link style={{textDecoration:'none' }} to="/update-user">
                update my info</Link>
            </li>
            
            
            </ul>
        </>
    )
    
}
export default UserHome;