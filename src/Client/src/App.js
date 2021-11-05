import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import CreateUser from './components/CreateUser';
// import  from './Component/CreateFlight';
import CreateFlight from './Component/CreateFlight';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path='/' component={CreateFlight} />
          {/* <Route path='/create-user' component={CreateUser} /> */}
    
        </div>
      </Router>
    );
  }
}

export default App;