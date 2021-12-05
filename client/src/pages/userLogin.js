import React from 'react'
import {useState  } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import PopUp from "./PopUp";

export default function UserLogin() {
    
    const [loginEmail, setEmail]=useState('');
    const [loginPassword, setPassword]=useState('');
    

    let login = (e) => {
        e.preventDefault();
    
         data = {
          email: loginEmail,
          password: loginPassword,
                };      
         console.log(data);
        axios
    .post('http://localhost:8000/User-Login',data)
    .then((result) => {
      console.log("res...");
      console.log(result.data);
      
  }
  )
    .catch(err => {
        console.log("error...");
        console.log(err);
      console.log("Error in User Login!");
    })
    }
    



return (
    
    <div>
        <h1>User Login</h1>

        {/* <form onSubmit={(event) => {login}}> */}
            <input
                value={loginEmail}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email" />
            <br></br><br></br>
            <input
                value={loginPassword}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                placeholder="Password" />
            <br></br><br></br>
            {/* <input type="submit" value="login">
                </input> */}

                <button onClick ={(event) => {login(event)}}>
                <Link style={{textDecoration:'none' }} to="/User-Page">
                Login </Link>
            </button>
        {/* </form> */}
        </div>
    
        
    
)}