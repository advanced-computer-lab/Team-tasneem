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



function AdminHome() {

    return(
        <>
        <h1>Omarrr</h1>
<Router>
       <div>
           <Link to="/add-flights">
             add flight
           </Link>
         </div><br></br><br></br><div>
           <Link to="/list-flights">
             list all flights
           </Link>
         </div><br></br><br></br><div>
           <Link to="/search-flights">
             search flights
           </Link>
         </div><br></br><br></br><div>
           <Link to="/update-flights">
             update a flight
           </Link>
         </div><br></br><br></br><div>
           <Link to="/delete-flights">
             delete a flight
           </Link>

         </div>
         <Switch>
          <Route path="/add-flights">
           <CreateFlight/>
         </Route> 
         <Route path="/list-flights">
         <ViewFlights />
         </Route> 
         <Route path="/search-flights">
           <SearchFlights />
         </Route> 
         <Route path="/update-flights">
           <UpdateFlights />
         </Route> 
         <Route path="/delete-flights">
           <DeleteFlights />
         </Route> 
         

       </Switch>
       </Router>
       </>
);
    
}
export default AdminHome;