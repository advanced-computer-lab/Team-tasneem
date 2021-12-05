import axios from 'axios';
import React from 'react'
import {useState} from 'react';
import {Link} from 'react-router-dom';
import PopUp from './PopUp';

export default function ViewReservations() {
    
    const [email, setEmail] = useState('');
    const [reservations,setReservations] = useState([]);
    const[invalidEmailPopUp,setInvalidEmailPopUp] = useState(false);
    const [deletedPopUp,setDeletedPopUp] = useState(false);   
    
    
    
    let sendEmail = (event, deletedReservation) => {
        console.log("sending");
       event.preventDefault();
       const response =  axios
           .post('http://localhost:8000/email',deletedReservation)
       
       const data =  response;
       console.log("email sent");
   }
    

    let viewReservations = (event, email) => {
        setDeletedPopUp(false);
        setInvalidEmailPopUp(false);
            axios
            .post('http://localhost:8000/view-and-cancel-reservations',email)
            .then(result =>{
                console.log(result.data);
                setReservations(result.data);
            })
            .catch(err=>{
                console.log("error");
                console.log(err);
                setInvalidEmailPopUp(true);
            }
                );
    }
    let cancelReservation = (event, reservation) => {
        console.log(reservation);
        event.preventDefault();
        let data ={
            userEmail : reservation.userEmail,
            flightNumber : reservation.flightNumber,
            returnFlightNumber : reservation.returnFlightNumber,
            ticketType:reservation.ticketType,
            reservedSeats:reservation.reservedSeats,
            returnReservedSeats: reservation.returnReservedSeats,
            totalPrice : reservation.totalPrice,

        }
        console.log(data);
        axios
        .delete('http://localhost:8000/view-and-cancel-reservations',{data})
        .then(result =>{
            setDeletedPopUp(true);
            sendEmail(event,reservation);
        })
    }

    return (
        <div>
             <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="email" />
                    <br></br><br></br>
                  <button onClick ={(event)=>{viewReservations(event,email)}}>
                <Link style={{textDecoration:'none' }}>
                view all my reservations</Link>
            </button>
            <div>
            <h1>Your Reservations</h1>
            
            {reservations.map((reservation) => (
             <div key={reservation.flightNumber} className="reservation">
                  <p>Flight Number: {reservation.flightNumber}</p>
                    
                    <br></br>
                    <p>Return Flight Number: {reservation.returnFlightNumber}</p>
                    <br></br>
                    <p>Reserved Departure Flight Seats: {reservation.reservedSeats.map((seat,index) => (<div key={seat}>
                        <p>Seat {seat}</p>
                    </div>))}</p>
                    <br></br>
                    <p>Reserved Return Flight Seats: {reservation.returnReservedSeats.map((seat,index) => (<div key={seat}>
                        <p>Seat {seat}</p>
                    </div>))}</p>
                  <br></br>
                    <p>Cabin: {reservation.ticketType}</p>
                    <br></br>
                    <p>Total price: {reservation.totalPrice}</p>
                    <br></br>
                    <button onClick ={(event)=>{window.confirm("Are you sure you wish to delete this reservation?") && cancelReservation(event,reservation)}}>
                <Link style={{textDecoration:'none' }}>
                cancel reservation</Link> 

            </button>
                    </div>
            ))}
            </div>
            <div>
         <PopUp trigger ={invalidEmailPopUp}>
             <p>This email has no registered reservations</p>
         </PopUp>
     </div>
     <div>
         <PopUp trigger ={deletedPopUp}>
             <p>Reservation deleted successfully</p>
         </PopUp>
     </div>
        </div>
        
    )
}