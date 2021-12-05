import React from 'react'
import {useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import {Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import axios from "axios";
import PopUp from "./PopUp";

export default function UpdateUser() {

    const [toBeUpdatedUser, setToBeUpdatedUser]=useState('');
    const [toBeUpdatedUserEmail,setToBeUpdatedUserEmail] = useState('');
    const [userID , setUserID] = useState('');
    const [username , setUserName] =useState('');
    const [firstName , setFirstName] =useState('');
    const [lastName , setLastName] =useState('');
    const [isAdmin , setIsAdmin] =useState(false);
    const [address , setAddress] =useState('');
    const [passportNumber , setPassportNumber] =useState('');
    const [countryCode , setCountryCode] =useState('');
    const [phoneNumber , setPhoneNumber] =useState([]);
    const [creditCard , setCreditCard] =useState([]);
    const [email , setUserMail] =useState('');
    const [password , setUserPassword]= useState('');
    const [addedPopUp, setAddedPopUp] = useState(false);
    const [errorPopUp, setErrorPopUp] = useState(false);
    

    let data;
    let updateUser = (e) => {
        e.preventDefault();
        console.log("Update user....");
        setAddedPopUp(false);
        setErrorPopUp(false);

        
        data={
            toBeUpdatedUser : toBeUpdatedUser, 
            userID : userID,
            username : username,
            email : email,
            oldEmail:toBeUpdatedUserEmail,
            password : password,
            firstName : firstName,
            lastName : lastName,
            isAdmin : isAdmin,
            address : address,
            passportNumber : passportNumber,
            countryCode : countryCode,
            phoneNumber : phoneNumber,
            creditCard : creditCard 
        }
        axios
        .put('http://localhost:8000/update-user', data)
        .then(res => {
            console.log("Updated");
            console.log(res.data);
            setAddedPopUp(true);
          })
          .catch(err => {
            console.log("Error in Update User!");
            setErrorPopUp(true);
            console.log(err);
          })
    }

    return(
        <>
             <div>
                <h1>Update User</h1>

                <form onSubmit={updateUser}>

                <label>
                        User to be Updated:
                    </label>
                    <br></br>
                    <input
                        value={toBeUpdatedUser}
                        onChange={(e) => setToBeUpdatedUser(e.target.value)}
                        type="number"
                        placeholder="Enter The ID you need to update" 
                    />

                    <br></br> <br></br>


                    <label>
                        User's email to be Updated:
                    </label>
                    <br></br>
                    <input
                        value={toBeUpdatedUserEmail}
                        onChange={(e) => setToBeUpdatedUserEmail(e.target.value)}
                        type="text"
                        placeholder="Enter your old email" 
                    />

                    <br></br> <br></br>


                <label>
                        User ID:
                    </label>
                    <br></br>
                    <input
                        value={userID}
                        onChange={(e) => setUserID(e.target.value)}
                        type="number"
                        placeholder="Enter Your ID" 
                    />

                    <br></br> <br></br>
                    

                    <label>
                        UserName:
                    </label>
                    <br></br>
                    <input
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        type="text"
                        placeholder="Enter Your UserName" 
                    />

                    <br></br> <br></br>


                    <label>
                        User Email:
                    </label>
                    <br></br>
                    <input
                        value={email}
                        onChange={(e) => setUserMail(e.target.value)}
                        type="text"
                        placeholder="Enter Your Email" 
                    />

                    <br></br> <br></br>

                    <label>
                        User Password:
                    </label>
                    <br></br>
                    <input
                        value={password}
                        onChange={(e) => setUserPassword(e.target.value)}
                        type="text"
                        placeholder="Enter Your Password" 
                    />
                    <br></br> <br></br>

                    <label>
                        Is Admin:
                    </label>
                    <br></br>
                    <input
                        value={isAdmin}
                        onChange={(e) => setIsAdmin(e.target.value)}
                        type="text"
                        placeholder="Are you Admin" 
                    />
                    <br></br>    <br></br>  


                    <label>
                        User First Name:
                    </label>
                    <br></br>
                    <input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        type="text"
                        placeholder="Enter Your First Name" 
                    />
                    <br></br> <br></br>

                    <label>
                        User Last Name:
                    </label>
                    <br></br>
                    <input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        type="text"
                        placeholder="Enter Your Last Name" 
                    />
                    <br></br> <br></br>

                    <label>
                        Address:
                    </label>
                    <br></br>
                    <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        type="text"
                        placeholder="Enter Your Address" 
                    />
                    <br></br> <br></br>

                    <label>
                        User Phone Number:
                    </label>
                    <br></br>
                    <input
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        type="text"
                        placeholder="Enter Your Phone Number" 
                    />
                    <br></br> <br></br>

                    <label>
                        User Passport Number:
                    </label>
                    <br></br>
                    <input
                        value={passportNumber}
                        onChange={(e) => setPassportNumber(e.target.value)}
                        type="text"
                        placeholder="Enter Your Passport Number" 
                    />
                    <br></br> <br></br>


                    <label>
                        Country Code:
                    </label>
                    <br></br>
                    <input
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        type="text"
                        placeholder="Enter Your Country Code" 
                    />
                    <br></br> <br></br>

                    <label>
                        User Credit Card:
                    </label>
                    <br></br>
                    <input
                        value={creditCard}
                        onChange={(e) => setCreditCard(e.target.value)}
                        type="text"
                        placeholder="Enter Your CreditCard" 
                    />
                    <br></br> <br></br>

                    <input type="submit" value="update my info">
                    </input>
                </form>
            </div>

            <div>
            <PopUp trigger ={addedPopUp}>
                <p>Your infromation was updated successfully!</p>
            </PopUp>
        </div>
        <div>
            <PopUp trigger ={errorPopUp}>
                <p>please fill all the required fields</p>
            </PopUp>
        </div>
        </>
    )
}