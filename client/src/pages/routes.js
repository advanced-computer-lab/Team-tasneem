import React from 'react'
import UserHome from './User-Page'
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
import UserPage from './User-Page'
import Home from './Home'
import ViewFlights from './ViewFlights';
import UpdateUser from './updateUser'
import SearchResults from './SearchResults';
import DeleteFlights from './DeleteFlights';
import CreateFlight from './CreateFlight';
import UpdateFlights from './UpdateFlights';
import UserSearch from './UserSearch';
import SearchFlights from './SearchFlights';
import AdminPage from './Admin-page';
import UserLogin from './userLogin';
import viewReservation from './viewReservation'
import SignUp from './SignUp';
export default function Routes() {
    return (
        <div>
            <Router>
  <Switch>
         <Route exact path = "/" component={Home}></Route>
         <Route path="/admin-page" component={AdminPage}></Route> 
         <Route path="/add-flights" component={CreateFlight}></Route> 
         <Route path="/list-flights" component={ViewFlights}></Route>
         <Route path="/search-flights" component={SearchFlights}></Route> 
         <Route path="/update-flights" component={UpdateFlights}></Route> 
         <Route path="/delete-flights" component={DeleteFlights}></Route> 
         <Route path="/search-results" component={SearchResults}></Route>
         <Route path ="/update-user" component={UpdateUser}></Route>
         <Route path="/User-Page" component={UserPage}></Route> 
         <Route path="/User-Search" component={UserSearch}></Route> 
         <Route path="/User-Login" component={UserLogin}></Route> 
         <Route path="/create-user" component={SignUp}></Route>
         <Route path="/view-and-cancel-reservations" component={viewReservation}></Route> 
  </Switch>


      </Router>

        </div>
    )
}