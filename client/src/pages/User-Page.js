import {useState } from "react";
 import axios from "axios";
 import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
import { useHistory } from 'react-router-dom';

import UserSearch from "./UserSearch";



const UserHome = () => {
    return (
      <div>
        <h1>User Page</h1>
         <button>
            <Link style={{textDecoration:'none' }} to="/User-Search">Search avaliable flights</Link>
          </button>
      </div>
    );
  };
    
export default UserHome;