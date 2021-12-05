import React from 'react'
import {useState, createContext } from 'react';
import { useHistory } from 'react-router';
import {Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import axios from "axios";

import SearchResults from './SearchResults'; 

const UserSearch = () => {

    //add cabin class in search criteria

    //context api to pass states between pages (react.createContext) aw eb3at fel props aw store fel local memory--> 3ashan el division el mabyezharsh    

    //show form????

    // const searchResult = useSelector(state=>state.searchflight)
    
    // const context = createContext('Default Value');
    const [returnFlights,setReturnFlights] = useState([]);
    const [confirmFlights, setConfirmFlights] = useState([]);
    const [searchTo, setTo]=useState('');
    const [searchFrom, setFrom]=useState('');
    const [searchDepartureTime, setDepartureTime]=useState('');
    const [searchArrivalTime, setArrivalTime]=useState('');
    const [searchDepartureTimeI, setDepartureTimeI]=useState('');
    const [searchArrivalTimeI, setArrivalTimeI]=useState('');
    const [flights, setFlights] = useState([]);
    const [selectedBusinessSeats, setSelectedBusinessSeats] = useState([]);
    const [selectedFirstClassSeats, setSelectedFirstClassSeats] = useState([]);
    const [selectedEconomySeats, setSelectedEconomySeats] = useState([]);
    const [numberOfAdultTickets, setNumberOfAdultTickets] = useState('');
    const [numberOfChildTickets, setNumberOfChildTickets] = useState('');

    const [selectedReturnBusinessSeats, setSelectedReturnBusinessSeats] = useState([]);
    const [selectedReturnFirstClassSeats, setSelectedReturnFirstClassSeats] = useState([]);
    const [selectedReturnEconomySeats, setSelectedReturnEconomySeats] = useState([]);


    const [selectedBusinessFlight, setSelectedBusinessFlight] = useState({
        flightNumber:'',
to:'',
from:'',
departureTime:'',
arrivalTime:'',
tripDuration:'',
baggageAllowance:'',
totalSeats:'',
noOfEconomySeats:'',
noOfFirstSeats:'',
noOfBusinessSeats:'',
economyPrice:'',
businessPrice:'',
firstClassPrice:'',
returnFlightID:'',
departureTerminal:'',
arrivalTerminal:'',
availableBusinessSeats:[],
availableEconomySeats:[],
availableFirstSeats:[]
});
    const [selectedFirstClassFlight, setSelectedFirstClassFlight] = useState({
        flightNumber:'',
to:'',
from:'',
departureTime:'',
arrivalTime:'',
tripDuration:'',
baggageAllowance:'',
totalSeats:'',
noOfEconomySeats:'',
noOfFirstSeats:'',
noOfBusinessSeats:'',
economyPrice:'',
businessPrice:'',
firstClassPrice:'',
returnFlightID:'',
departureTerminal:'',
arrivalTerminal:'',
availableBusinessSeats:[],
availableEconomySeats:[],
availableFirstSeats:[]
});
    const [selectedEconomyFlight, setSelectedEconomyFlight] = useState({
        flightNumber:'',
to:'',
from:'',
departureTime:'',
arrivalTime:'',
tripDuration:'',
baggageAllowance:'',
totalSeats:'',
noOfEconomySeats:'',
noOfFirstSeats:'',
noOfBusinessSeats:'',
economyPrice:'',
businessPrice:'',
firstClassPrice:'',
returnFlightID:'',
departureTerminal:'',
arrivalTerminal:'',
availableBusinessSeats:[],
availableEconomySeats:[],
availableFirstSeats:[]
});

const [selectedReturnBusinessFlight, setSelectedReturnBusinessFlight] = useState({
        flightNumber:'',
to:'',
from:'',
departureTime:'',
arrivalTime:'',
tripDuration:'',
baggageAllowance:'',
totalSeats:'',
noOfEconomySeats:'',
noOfFirstSeats:'',
noOfBusinessSeats:'',
economyPrice:'',
businessPrice:'',
firstClassPrice:'',
returnFlightID:'',
departureTerminal:'',
arrivalTerminal:'',
availableBusinessSeats:[],
availableEconomySeats:[],
availableFirstSeats:[]
});
// if(searchArrivalTimeI==''){
//     setSearchArrivalTimeI((new Date()).today());
// }
// if(searchDepartureTimeI==''){
//     let tempDate = new Date(searchArrivalTimeI);
//     tempDate.setDate(tempDate.getDate()+7);
//     setSearchDepartureTimeI(tempDate);
// }
// let arrDate = new Date(searchArrivalTimeI);
// if(arrDate.getTime() < (new Date()).today() || !(new Date()).validateDate(arrDate.getDay(), arrDate.getYear(), arrDate.getMonth())){
//     setErrorPopUp(true);
// }else{
//     setArrivalTime(searchArrivalTimeI)
// }
// let depDate = new Date(searchDepartureTimeI);
// if(depDate.getTime() < (new Date()).today() || !(new Date()).validateDate(depDate.getDay(), depDate.getYear(), depDate.getMonth())){
//     setErrorPopUp(true);
// }
// else{
//     setDepartureTime(searchDepartureTimeI)
// }
    const [selectedReturnFirstClassFlight, setSelectedReturnFirstClassFlight] = useState({
        flightNumber:'',
to:'',
from:'',
departureTime:'',
arrivalTime:'',
tripDuration:'',
baggageAllowance:'',
totalSeats:'',
noOfEconomySeats:'',
noOfFirstSeats:'',
noOfBusinessSeats:'',
economyPrice:'',
businessPrice:'',
firstClassPrice:'',
returnFlightID:'',
departureTerminal:'',
arrivalTerminal:'',
availableBusinessSeats:[],
availableEconomySeats:[],
availableFirstSeats:[]
});
    const [selectedReturnEconomyFlight, setSelectedReturnEconomyFlight] = useState({
        flightNumber:'',
to:'',
from:'',
departureTime:'',
arrivalTime:'',
tripDuration:'',
baggageAllowance:'',
totalSeats:'',
noOfEconomySeats:'',
noOfFirstSeats:'',
noOfBusinessSeats:'',
economyPrice:'',
businessPrice:'',
firstClassPrice:'',
returnFlightID:'',
departureTerminal:'',
arrivalTerminal:'',
availableBusinessSeats:[],
availableEconomySeats:[],
availableFirstSeats:[]
});

    const [chosenReturnFlights, setChosenReturnFlight]=useState([]);
    const [businessCheckBoxes, setBusinessCheckBoxes] = useState([]);
    const [economyCheckBoxes, setEconomyCheckBoxes] = useState([]);
    const [firstClassCheckBoxes, setFirstClassCheckBoxes] = useState([]);
    const [returnBusinessCheckBoxes, setReturnBusinessCheckBoxes] = useState([]);
    const [returnEconomyCheckBoxes, setReturnEconomyCheckBoxes] = useState([]);
    const [returnFirstClassCheckBoxes, setReturnFirstClassCheckBoxes] = useState([]);
    const [searchCabin,setSearchCabin] = useState('');
    const [chosenFlight, setChosenFlight] = useState([]);

    const [totalPrice, setTotalPrice] = useState(0);
  

    let setReturnFlight = (event, selectedFlight) =>{
        setChosenReturnFlight([selectedFlight]);
    }

    let setConfirmationFlights = (event) =>{
        let price=0;
       if(selectedEconomyFlight.flightNumber!=''){
            price += selectedEconomyFlight.economyPrice * numberOfAdultTickets;
            price += (selectedEconomyFlight.economyPrice * numberOfChildTickets)*0.5;
       }else if(selectedBusinessFlight.flightNumber!=''){
        price += selectedBusinessFlight.businessPrice * numberOfAdultTickets;
        price += (selectedBusinessFlight.businessPrice * numberOfChildTickets)*0.5;
       
    }else{
        price += selectedFirstClassFlight.firstClassPrice * numberOfAdultTickets;
        price += (selectedFirstClassFlight.firstClassPrice * numberOfChildTickets)*0.5;
        
    }
    console.log("price");
    console.log(price);

    if(selectedReturnEconomyFlight.flightNumber!=''){
        price += selectedReturnEconomyFlight.economyPrice * numberOfAdultTickets;
            price += (selectedReturnEconomyFlight.economyPrice * numberOfChildTickets)*0.5;

    }else if(selectedReturnBusinessFlight.flightNumber!=''){
        price += selectedReturnBusinessFlight.businessPrice * numberOfAdultTickets;
        price += (selectedReturnBusinessFlight.businessPrice * numberOfChildTickets)*0.5;
 }else{
    price += selectedReturnFirstClassFlight.businessPrice * numberOfAdultTickets;
    price += (selectedReturnFirstClassFlight.businessPrice * numberOfChildTickets)*0.5;
 }
 setTotalPrice(price);
 console.log(price);
 setConfirmFlights([chosenFlight[0],chosenReturnFlights[0]]); 
 console.log("chosen");
 console.log(chosenFlight);
 console.log(chosenReturnFlights);
 console.log(confirmFlights);
}

    let reserveFlight =(event) => {
        event.preventDefault();
        console.log(selectedBusinessFlight);
        let reservedBusinessSeats = businessCheckBoxes.map((item, position) =>
        item === true ? selectedBusinessFlight.availableBusinessSeats[position] : 0
        );
        console.log(reservedBusinessSeats);
        let reservedEconomySeats = economyCheckBoxes.map((item, position) =>
        item === true ? selectedEconomyFlight.availableEconomySeats[position] : 0
        );

        let reservedFirstClassSeats = firstClassCheckBoxes.map((item, position) =>
        item === true ? selectedFirstClassFlight.availableFirstSeats[position] : 0
        );

        let reservedReturnBusinessSeats = returnBusinessCheckBoxes.map((item, position) =>
        item === true ? selectedReturnBusinessFlight.availableBusinessSeats[position] : 0
        );

        let reservedReturnEconomySeats = returnEconomyCheckBoxes.map((item, position) =>
        item === true ? selectedReturnEconomyFlight.availableEconomySeats[position] : 0
        );

        let reservedReturnFirstClassSeats = returnFirstClassCheckBoxes.map((item, position) =>
        item === true ? selectedReturnFirstClassFlight.availableFirstSeats[position] : 0
        );

        let data ={
            chosenFlight:chosenFlight[0],
            chosenReturnFlight:chosenReturnFlights[0],
            totalPrice:totalPrice,
            searchCabin:searchCabin,
            reservedBusinessSeats:reservedBusinessSeats,
            reservedEconomySeats:reservedEconomySeats,
            reservedFirstClassSeats:reservedFirstClassSeats,
            reservedReturnBusinessSeats:reservedReturnBusinessSeats,
            reservedReturnEconomySeats:reservedReturnEconomySeats,
            reservedReturnFirstClassSeats:reservedReturnFirstClassSeats
        }
        axios
        .post('http://localhost:8000/reserve-flight',data)
        .then((result) => {
          console.log("reserved");
          console.log(result.data);
          //setAddedPopUp(true);
      }
      )
        .catch(err => {
            console.log("error...");
            console.log(err);
          console.log("Error in User search flight!");
        });
    }

    let addBusinessSeat = (event,seat,index) => {
        setSelectedBusinessSeats([...selectedBusinessSeats,seat]);
        
        let updatedCheckBoxes = businessCheckBoxes.map((item, position) =>
        index === position ? !item : item
        );
        setBusinessCheckBoxes(updatedCheckBoxes);
    }
      
      let addEconomySeat = (event,seat,index) => {
        setSelectedEconomySeats([...selectedEconomySeats,seat]);

        let updatedCheckBoxes = economyCheckBoxes.map((item, position) =>
        index === position ? !item : item
        );
        setEconomyCheckBoxes(updatedCheckBoxes);
      };
      let addFirstClassSeat = (event,seat,index) => {
        setSelectedFirstClassSeats([...selectedFirstClassSeats,seat]);

        let updatedCheckBoxes = firstClassCheckBoxes.map((item, position) =>
        index === position ? !item : item
        );
        setFirstClassCheckBoxes(updatedCheckBoxes);
      };


      let addReturnBusinessSeat = (event,seat,index) => {
        setSelectedReturnBusinessSeats([...selectedReturnBusinessSeats,seat]);
        
        let updatedCheckBoxes = returnBusinessCheckBoxes.map((item, position) =>
        index === position ? !item : item
        );
        setReturnBusinessCheckBoxes(updatedCheckBoxes);
    }
      
      let addReturnEconomySeat = (event,seat,index) => {
        setSelectedReturnEconomySeats([...selectedReturnEconomySeats,seat]);

        let updatedCheckBoxes = returnEconomyCheckBoxes.map((item, position) =>
        index === position ? !item : item
        );
        setReturnEconomyCheckBoxes(updatedCheckBoxes);
      };
      let addReturnFirstClassSeat = (event,seat,index) => {
        setSelectedReturnFirstClassSeats([...selectedReturnFirstClassSeats,seat]);

        let updatedCheckBoxes = returnFirstClassCheckBoxes.map((item, position) =>
        index === position ? !item : item
        );
        setReturnFirstClassCheckBoxes(updatedCheckBoxes);
      };
      

      let showReturnFlights = (e) =>{
        e.preventDefault();

        let data = {
            flightNumber:chosenFlight[0].returnFlightID,
            to: searchFrom,
            from: searchTo,
            arrivalTime: searchArrivalTime
            };      
  
          axios
      .post('http://localhost:8000/User-Search',data)
      .then((result) => {
        console.log("res...");
        console.log(result.data);
        setReturnFlights(result.data);
    }
    )
      .catch(err => {
          console.log("error...");
          console.log(err);
        console.log("Error in User search flight!");
      })
      }
  


    let showSeats = (event, selectedFlight) => { //add cabin to search criteria
        console.log(selectedFlight);
        
        if(searchCabin=='Business'||searchCabin=='business'){
        setSelectedBusinessFlight(selectedFlight);
        setBusinessCheckBoxes(new Array(selectedFlight.availableBusinessSeats.length).fill(false));
        }
        else if(searchCabin=='Economy'||searchCabin=='economy'){
        setSelectedEconomyFlight(selectedFlight);
        setEconomyCheckBoxes(new Array(selectedFlight.availableEconomySeats.length).fill(false));
        }
        else if(searchCabin=='First Class' || searchCabin =='first class' || searchCabin =='First class'){
            console.log("f");
            console.log(selectedFlight);
        setSelectedFirstClassFlight(selectedFlight);
        setFirstClassCheckBoxes(new Array(selectedFlight.availableFirstSeats.length).fill(false));
        }else{
           // setErrorPopUp(true);
           console.log("invalid entry for the cabin"); 
           return;
        }
    }


    let selectFlight = (event, selectedFlight) => {
        setChosenFlight([selectedFlight]);
    }

    let showReturnSeats = (event, selectedFlight) => { //add cabin to search criteria
        console.log(selectedFlight);
        //setChosenFlight(selectedFlight);
        if(searchCabin=='Business'||searchCabin=='business'){
        setSelectedReturnBusinessFlight(selectedFlight);
        setReturnBusinessCheckBoxes(new Array(selectedFlight.availableBusinessSeats.length).fill(false));
        }
        else if(searchCabin=='Economy'||searchCabin=='economy'){
        setSelectedReturnEconomyFlight(selectedFlight);
        setReturnEconomyCheckBoxes(new Array(selectedFlight.availableEconomySeats.length).fill(false));
        }
        else{
        setSelectedReturnFirstClassFlight(selectedFlight);
        setReturnFirstClassCheckBoxes(new Array(selectedFlight.availableFirstSeats.length).fill(false));
        }
    }

    
    let search = (e) => {
        e.preventDefault();

        if(!(searchCabin=="Economy"||searchCabin=="economy"||searchCabin=="Business"||searchCabin=="business"
        ||searchCabin=="first class"||searchCabin=="First Class"||searchCabin=="First class")){
           // setErrorPopUp(true);
           console.log("invalid entry for the cabin");
            return;
        }
        setDepartureTime(searchDepartureTimeI);
        setArrivalTime(searchArrivalTimeI);
        console.log(searchDepartureTimeI);
        console.log(searchDepartureTime);
       let seats = parseInt(numberOfAdultTickets,10)+parseInt(numberOfChildTickets,10);
         let data = {
          to: searchTo,
          from: searchFrom,
          departureTime: searchDepartureTimeI,
          seats: seats,
          cabin: searchCabin
          };
          console.log("data");    
          console.log(data);  

        axios
    .post('http://localhost:8000/User-Search',data)
    .then((result) => {
      console.log("res...");
      console.log(result.data);
      setFlights(result.data);
  }
  )
    .catch(err => {
        console.log("error...");
        console.log(err);
      console.log("Error in User search flight!");
    })
    }

return (
    <>
    <div class ="userSearch" id="searchCriteria">
        <h1>Search Flight</h1>

        <form onSubmit={(event) => { search(event); } }>
       
            <label for="from">Please enter the country you're coming from, in this form: CAI, LAX, etc..</label>
            <br></br><br></br>
            <input
                value={searchFrom}
                onChange={(e) => setFrom(e.target.value)}
                type="text"
                placeholder="From" />
                <br></br><br></br>
 <label for="to">  Please enter the country you want to visit in this form: CAI, LAX, etc..</label>
 <br></br><br></br>
            <input id="to"
                value={searchTo}
                onChange={(e) => setTo(e.target.value)}
                type="text"
                placeholder="To" />
            
            <br></br><br></br>
            <label for="departure">Please enter departure date:</label>
<br></br><br></br>
            <input id="departure"
                value={searchDepartureTimeI}
                onChange={(e) => setDepartureTimeI(e.target.value)}
                type="date"
                placeholder="Departure Time" />

            <br></br><br></br>
            <label for="arrival">Please enter arrival date:</label>
            <br></br><br></br>
            <input id="arrival"
                value={searchArrivalTimeI}
                onChange={(e) => setArrivalTimeI(e.target.value)}
                type="date"
                placeholder="Arrival Time" />


            <br></br><br></br>
            
            <label for="cabin">Please enter flight cabin in this form :"Business" , "economy", "first class"</label>
            <br></br><br></br>
            
            <input id="cabin"
                value={searchCabin}
                onChange={(e) => setSearchCabin(e.target.value)}
                type="text"
                placeholder="cabin" />

<br></br><br></br>
<label for="adult">Please enter number of adult tickets:</label>
            <br></br><br></br>
            
            <input id="adult"
                value={numberOfAdultTickets}
                onChange={(e) => setNumberOfAdultTickets(e.target.value)}
                type="number"
                placeholder="Number of adult tickets" />

<br></br><br></br>
<label for="child">Please enter number of child tickets:</label>
<br></br><br></br>
            <input id="child"
                value={numberOfChildTickets}
                onChange={(e) => setNumberOfChildTickets(e.target.value)}
                type="number"
                placeholder="Number of child tickets" />

<br></br><br></br>

            <input type="submit" value="search">
            </input>


        </form>
        <div />


    </div><div>
            {flights.map((flight) => (

                <div key={flight.flightNumber} className="flight">
                    <h1>Available departure flights</h1>
                    <p>Flight Number: {flight.flightNumber}</p>
                    <br></br>
                    <p>Departure Time: {flight.departureTime}</p>
                    <br></br>
                    <p>arrivalTime: {flight.arrivalTime}</p>
                    <br></br>
                    <p>Business ticket price: {flight.businessPrice}</p>
                    <br></br>
                    <p>Economy ticket price: {flight.economyPrice}</p>
                    <br></br>
                    <p>First class ticket price: {flight.firstClassPrice}</p>
                    <br></br>
                    <button onClick={(event) => { selectFlight(event, flight); } }>Show flight details</button>
                </div>
            ))}
        </div>
        
        <div>
            {chosenFlight.map((flight) => (

                <div key={flight.flightNumber} className="flight">
                    <h1>Available departure flights</h1>
                    <p>Flight Number: {flight.flightNumber}</p>
                    <br></br>
                    <p>From: {flight.from}</p>
                    <br></br>
                    <p>To: {flight.to}</p>
                    <br></br>
                    <p>Departure Time: {flight.departureTime}</p>
                    <br></br>
                    <p>arrivalTime: {flight.arrivalTime}</p>
                    <br></br>
                    <p>Departure Terminal: {flight.departureTerminal}</p>
                    <br></br>
                    <p>Arrival Terminal: {flight.arrivalTerminal}</p>
                    <br></br>
                    <p>Number of remaining busuiness seats: {flight.availableBusinessSeats.length}</p>
                    <br></br>
                    <p>Business ticket price: {flight.businessPrice}</p>
                    <br></br>
                    <p>Number of remaining economy seats: {flight.availableEconomySeats.length}</p>
                    <br></br>
                    <p>Economy ticket price: {flight.economyPrice}</p>
                    <br></br>
                    <p>Number of remaining first class seats: {flight.availableFirstSeats.length}</p>
                    <br></br>
                    <p>First class ticket price: {flight.firstClassPrice}</p>
                    <br></br>
                    <p>Baggage Allowance: {flight.baggageAllowance}</p>
                    <br></br>
                    <p>Trip duration: {flight.tripDuration}</p>
                    <br></br>
                    <p>Return flight ID: {flight.returnFlightID}</p>
                    <br></br>
                    <button onClick={(event) => { showSeats(event, flight); } }>Reserve Flight</button>
                </div>
            ))}
        
        
        
        <div>
        <h1>Available economy seats for flight</h1>
            {selectedEconomyFlight.availableEconomySeats.map((seat, index) => (
                <div className="topping">
                 
                   
                    <input
                        type="checkbox"
                        id={"seat" + index + 1}
                        name="seat"
                        value={"seat " + (index + 1)}
                        checked={economyCheckBoxes[index]}
                        onChange={(event) => { addEconomySeat(event, seat, index); } } />
                    seat {seat}
                </div>



            ))}
            <button onClick = {(event) => showReturnFlights(event)}>
            reserve seats
            </button>
        </div>
        <div>
        <h1>Available first class seats for flight</h1>
            {selectedFirstClassFlight.availableFirstSeats.map((seat, index) =>(
                 <div className="topping">
                     
                         
                     
             <input
               type="checkbox"
               id={"seat"+index+1}
               name="seat"
               value={"seat " + index+1}
               checked={firstClassCheckBoxes[index]}
               onChange={(event) => {addFirstClassSeat(event,seat,index)}}
             />
             seat {seat}
            </div>
     
            
            
            ))}
            
                <button onClick = {(event) => showReturnFlights(event)}>reserve seats</button>
            
            
        </div>
        
        <div>
        <h1>Available business seats for flight</h1>
            {selectedBusinessFlight.availableBusinessSeats.map((seat, index) =>(
                 <div className="topping">
                     
                     
             <input
               type="checkbox"
               id={index}
               name="seat"
               value={"seat " + index+1}
               checked={businessCheckBoxes[index]}
               onChange={(event) => {addBusinessSeat(event,seat,index)}} //callback fn????
             />  
             seat {seat}
            </div>
     
            
            
            ))}
            <button onClick = {(event) => showReturnFlights(event)}>reserve seats</button>
        </div>


        <div>
            
            {returnFlights.map((flight) => (

                <div key={flight.flightNumber} className="flight">
                    <h1>Available return flights</h1>
                    <p>Flight Number: {flight.flightNumber}</p>
                    <br></br>
                    <p>Departure Time: {flight.departureTime}</p>
                    <br></br>
                    <p>arrivalTime: {flight.arrivalTime}</p>
                    <br></br>
                    <p>Business ticket price: {flight.businessPrice}</p>
                    <br></br>
                    <p>Economy ticket price: {flight.economyPrice}</p>
                    <br></br>
                    <button onClick={(event) => { setReturnFlight(event, flight); } }>Show return flight details</button>
                </div>
            ))}
        </div>


        <div>
            {chosenReturnFlights.map((flight) => (

                <div key={flight.flightNumber} className="flight">
                    <h1>Available return flights</h1>
                    <p>Flight Number: {flight.flightNumber}</p>
                    <br></br>
                    <p>From: {flight.from}</p>
                    <br></br>
                    <p>To: {flight.to}</p>
                    <br></br>
                    <p>Departure Time: {flight.departureTime}</p>
                    <br></br>
                    <p>arrivalTime: {flight.arrivalTime}</p>
                    <br></br>
                    <p>Departure Terminal: {flight.departureTerminal}</p>
                    <br></br>
                    <p>Arrival Terminal: {flight.arrivalTerminal}</p>
                    <br></br>
                    <p>Business ticket price: {flight.businessPrice}</p>
                    <br></br>
                    <p>Economy ticket price: {flight.economyPrice}</p>
                    <br></br>
                    <p>First class ticket price: {flight.firstClassPrice}</p>
                     <br></br> 
                     <p>Baggage Allowance: {flight.baggageAllowance}</p>
                    <br></br>
                    <p>Trip duration: {flight.tripDuration}</p>
                    <br></br>
                    {/* <p>B seats: {flight.availableBusinessSeats}</p> */}
                    <button onClick={(event) => { showReturnSeats(event, flight); } }>Reserve Flight</button>
                </div>
            ))}
        </div>


        <div>
        <h1>Available economy seats for return flight</h1>
            {selectedReturnEconomyFlight.availableEconomySeats.map((seat, index) => (
                <div className="topping">
                    
                    
                    <input
                        type="checkbox"
                        id={"seat" + index + 1}
                        name="seat"
                        value={"seat " + (index + 1)}
                        checked={returnEconomyCheckBoxes[index]}
                        onChange={(event) => { addReturnEconomySeat(event, seat, index)} } />
                    seat {seat}
                </div>



            ))}
            <button onClick = {(event) => { setConfirmationFlights(event); }}>
            reserve seats
            </button>
        </div>
        <div>
        <h1>Available first class seats for return flight</h1>
            {selectedReturnFirstClassFlight.availableFirstSeats.map((seat, index) =>(
            
            <div className="masroo2a">
             <input
               type="checkbox"
               id={"seat"+index+1}
               name="seat"
               value={"seat " + index+1}
               checked={returnFirstClassCheckBoxes[index]}
               onChange={(event) => {addReturnFirstClassSeat(event,seat,index)}}
             />
             seat {seat}
            </div>
     
            
            
            ))}
            <button onClick = {(event) => { setConfirmationFlights(event); }}>reserve seats</button>
        </div>
        
        <div>
        <h1>Available business seats for return flight</h1>
            {selectedReturnBusinessFlight.availableBusinessSeats.map((seat, index) =>(
               
                 <div className="topping">
            
            
             <input
               type="checkbox"
               id={index}
               name="seat"
               value={"seat " + index+1}
               checked={returnBusinessCheckBoxes[index]}
               onChange={(event) => {addReturnBusinessSeat(event,seat,index)}} //callback fn????
             />
             seat {seat}
            </div>
     
            
            
            ))}
            <button onClick = {(event) => { setConfirmationFlights(event)}}>reserve seats</button>
      </div>
        </div>

<div>
<h1>Your reservation's summary:</h1>
{confirmFlights.map((flight) => (

<div key={flight.flightNumber} className="flight">
    
    <p>Flight Number: {flight.flightNumber}</p>
    <br></br>
    <p>From: {flight.from}</p>
    <br></br>
    <p>To: {flight.to}</p>
    <br></br>
    <p>Departure Time: {flight.departureTime}</p>
    <br></br>
    <p>Arrival Time: {flight.arrivalTime}</p>
    <br></br>
    <p>Return Departure Terminal: {flight.departureTerminal}</p>
    <br></br>
    <p>Return Arrival Terminal: {flight.arrivalTerminal}</p>
    <br></br>
     <p>Baggage Allowance: {flight.baggageAllowance}</p>
    <br></br>
    <p>Trip duration: {flight.tripDuration}</p>
    <br></br>
    
        <div>
        
        <p>Reserved departure seats: </p>
        {selectedBusinessSeats.map((seat) => {
            <div>
            <p>seat {seat}</p>
            </div>
        })}
        {selectedEconomySeats.map((seat) => {
            <div>
            <p>seat {seat}</p>
            </div>
        })}
        {selectedFirstClassSeats.map((seat) => {
            <div>
            <p>seat {seat}</p>
            </div>
        })}
        <br></br>
        <p>Return reserved seats:</p>
         {selectedReturnBusinessSeats.map((seat) => {
             <div>
            <p>seat {seat}</p>
            </div>
        })}
        {selectedReturnEconomySeats.map((seat) => {
            <div>
            <p>seat {seat}</p>
            </div>
        })}
        {selectedReturnFirstClassSeats.map((seat) => {
            <div>
            <p>seat {seat}</p>
            </div>
        })}
        <br></br>
        <p>TotalPrice: {totalPrice}</p>
        </div>

</div>
))}
<button onClick = {(event) => {window.confirm("confrim reservation") && reserveFlight(event)}}>confirm</button>
            </div>

        

        
 </>  
)

}

export default UserSearch;