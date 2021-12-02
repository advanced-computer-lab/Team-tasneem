import React from 'react'
import {useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import {Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import axios from "axios";
import AdminHome from "./Admin-page";
import UserHome from "./User-Page";
import SearchResults from './SearchResults'; 
import CreateFlight from './CreateFlight';
import ViewFlights from './ViewFlights';
import SearchFlights from './SearchFlights';
import DeleteFlights from './DeleteFlights';
import UpdateCreateFlight from './UpdateFlights';
import UserSearch from './UserSearch';
import Home from './Home';

function Routes() {
  
return (
    <>

    
   <Router>

     <Switch>
     <div>
       <Route exact path="/" component={Home} />
       <Route  path='/admin-page' component={AdminHome}/>
       <Route  path='/User-Page' component={UserHome}/>
       <Route  path='/add-flights' component={CreateFlight}/>
       <Route  path='/list-flights' component={ViewFlights}/>
       <Route  path='/search-flights' component={SearchFlights}/>
       <Route  path='/update-flights' component={UpdateCreateFlight}/>
       <Route  path='/delete-flights' component={DeleteFlights}/>
       <Route  path='/User-Search' component={UserSearch}/>
       <Route  path='/SearchResults' component={SearchResults}/>
       <Route  path='/delete-flights' component={DeleteFlights}/>
     </div>
     </Switch>
    </Router>
        </>
   
)


}


export default Routes;