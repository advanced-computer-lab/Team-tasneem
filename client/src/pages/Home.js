import React from "react";

import { Link } from "react-router-dom";

  
const Home = () => {
  return (
    <>

<div>
      <h1>Home Page</h1>
      <br />
      <ul>
        <li>
          {/* Endpoint to route to Home component */}
          <Link style={{textDecoration:'none' }} to="/">Home</Link>
        </li>
        <br></br>
        <li>
          {/* Endpoint to route to About component */}
          <Link style={{textDecoration:'none' }} to="/admin-page">Admin page</Link>
        </li>
        <br></br>
        <li>
          {/* Endpoint to route to Contact Us component */}
          <Link style={{textDecoration:'none' }} to="/User-Page">User page </Link>
        </li>
      </ul>
    </div>
     

    </>
  );
};
  
export default Home;