import React from 'react'
import {useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import {Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import axios from "axios";

import SearchResults from './SearchResults';
// import DisplayBusinessSeats from './DisplayBusinessSeats';

export default function     UserSearch() {

    //add cabin class in search criteria

    //context api to pass states between pages (react.createContext) aw eb3at fel props aw store fel local memory--> 3ashan el division el mabyezharsh   

    //show form????

    // const searchResult = useSelector(state=>state.searchflight)

    const [noOfChildrenSeats , SetNoOfChildrenSeats]=useState('');
    const [noOfAdultsSeats , SetNoOfAdultsSeats]=useState('');
    const [searchFlightNumber, setFlightNumber]=useState('');
    const [cabinClass, setCabinClass]=useState('');
    const [searchTo, setTo]=useState('');
    const [searchFrom, setFrom]=useState('');
    const [searchDepartureTime, setDepartureTime]=useState('');
    const [searchArrivalTime, setArrivalTime]=useState('');
    const [searchDepartureTerminal, setDepartureTerminal]=useState('');
    const [searchArrivalTerminal, setArrivalTerminal]=useState('');
    const [flights, setFlights] = useState([]);
    const [selectedBusinessSeats, setSelectedBusinessSeats] = useState([]);
    const [selectedFirstClassSeats, setSelectedFirstClassSeats] = useState([]);
    const [selectedEconomySeats, setSelectedEconomySeats] = useState([]);
    const [businessCheckBoxes, setBusinessCheckBoxes] = useState([]);
    const [economyCheckBoxes, setEconomyCheckBoxes] = useState([]);
    const [firstClassCheckBoxes, setFirstClassCheckBoxes] = useState([]);
    const [chosenFlight, setChosenFlight] = useState({
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


    let addBusinessSeat = (seat,index) => {
        setSelectedBusinessSeats([...selectedBusinessSeats,seat]);

        let updatedCheckBoxes = businessCheckBoxes.map((item, position) =>
        index === position ? !item : item
        );
        setBusinessCheckBoxes(updatedCheckBoxes);
    }

      let addEconomySeat = (seat,index) => {
        setSelectedEconomySeats([...selectedEconomySeats,seat]);

        let updatedCheckBoxes = economyCheckBoxes.map((item, position) =>
        index === position ? !item : item
        );
        setEconomyCheckBoxes(updatedCheckBoxes);
      };
      let addFirstClassSeat = (seat,index) => {
        setSelectedFirstClassSeats([...selectedFirstClassSeats,seat]);

        let updatedCheckBoxes = firstClassCheckBoxes.map((item, position) =>
        index === position ? !item : item
        );
        setFirstClassCheckBoxes(updatedCheckBoxes);
      };
      const displayFirstClassSeats = (selectedFlight) =>
           <div>
            <h1>Available first class seats for flight</h1>
            {selectedFlight.availableFirstSeats.map((seat, index) =>(
                 <div className="topping">
             <input
               type="checkbox"
               id={"seat"+index+1}
               name="seat"
               value={"seat " + index+1}
               checked={firstClassCheckBoxes[index]}
               onChange={addFirstClassSeat(seat,index)}
             />
             seat {index}
            </div>



            ))}
        </div>

      let displayBusinessSeats =(selectedFlight) =>

            <div>
            <h1>Available business seats for flight</h1>
            {selectedFlight.availableBusinessSeats.map((seat, index) =>(
                 <div className="topping">
             <input
               type="checkbox"
               id={index}
               name="seat"
               value={"seat " + index+1}
               checked={businessCheckBoxes[index]}
               onChange={addBusinessSeat(seat,index)} //callback fn????
             />
             seat {index}
            </div>



            ))}
        </div>


      let displayEconomySeats = (selectedFlight) => { //why is it not displaying????

        <div>
        <h1>Available economy seats for flight</h1>
        {selectedFlight.availableEconomySeats.map((seat, index) =>(
             <div className="topping">
         <input
           type="checkbox"
           id={"seat"+index+1}
           name="seat"
           value={"seat " + index+1}
           checked={economyCheckBoxes[index]}
           onChange={addEconomySeat(seat,index)}
         />
         seat {index}
        </div>



        ))}
    </div>
}


    let showSeats = (event, selectedFlight) => { //add cabin to search criteria
        console.log(selectedFlight);
        setChosenFlight(selectedFlight);
        displayBusinessSeats(selectedFlight);
        displayEconomySeats(selectedFlight);
        displayFirstClassSeats(selectedFlight);
        setBusinessCheckBoxes(new Array(selectedFlight.availableBusinessSeats.length).fill(false));
        setFirstClassCheckBoxes(new Array(selectedFlight.availableFirstSeats.length).fill(false));
        setEconomyCheckBoxes(new Array(selectedFlight.availableEconomySeats.length).fill(false));
    }

    let data;
    let search = (e) => {
        e.preventDefault();
            console.log(searchTo);
         data = {
          to: searchTo,
          from: searchFrom,
          departureTime: searchDepartureTime,
          arrivalTime: searchArrivalTime

        };     

        axios
    .post('http://localhost:8000/User-Search',data)
    .then((result) => {
      console.log("keroooo");
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
    <div>
        <h1>Search Flight</h1>

        <form onSubmit={search} >
            {/* <div>
                <label>From:</label>
                <br></br>
                <select onChange={e => setFrom(e.target.value)}  >
                <option value="LAX">LAX</option>
                <option value="JFK">JFK</option>
                <option value="LHR">LHR</option>
                <option value="CAI">CAI</option>
                <option value="DXB">DXB</option>
                <option value="MUC">MUC</option>
                <option value="CDG">CDG</option>
                <option value="RUH">RUH</option>
                <option value="FRA">FRA</option>
                <option value="YYZ">YYZ</option>    
                </select> 
            </div> */}
            
             <label>From:</label>
                <br></br>
            <input 
                value={searchFrom}
                onChange={(e) => setFrom(e.target.value)}
                type="text"
                placeholder="From" />

            <br></br><br></br> 
            <label>To:</label>
            <br></br>
            <input
                value={searchTo}
                onChange={(e) => setTo(e.target.value)}
                type="text"
                placeholder="To" />
                <br></br><br></br>  
            {/* <div>
                <label>To:</label>
                <br></br>
                <select onChange={e => setTo(e.target.value)}  >
                <option value="LAX">LAX</option>
                <option value="JFK">JFK</option>
                <option value="LHR">LHR</option>
                <option value="CAI">CAI</option>
                <option value="DXB">DXB</option>
                <option value="MUC">MUC</option>
                <option value="CDG">CDG</option>
                <option value="RUH">RUH</option>
                <option value="FRA">FRA</option>
                <option value="YYZ">YYZ</option>    
                </select> 
            </div>
            <br></br><br></br> */}
            
            <label>Departure Date:</label>
            <br></br>
            <input
                value={searchDepartureTime}
                onChange={(e) => setDepartureTime(e.target.value)}
                type="date"
                placeholder="Departure Date" />

            <br></br><br></br>

            <label>Arrival Date:</label>
            <br></br>
            <input
                value={searchArrivalTime}
                onChange={(e) => setArrivalTime(e.target.value)}
                type="date"
                placeholder="Arrival Date" />

            <br></br><br></br>
            
            <label>Number of Adult Seats:</label>
            <br></br>
            <input
                value={noOfAdultsSeats}
                onChange={(e) => SetNoOfAdultsSeats(e.target.value)}
                type="text"
                placeholder="Number Of Adult Seats" />

            <br></br><br></br>


            <label>Number of Children Seats:</label>
            <br></br>
            <input
                value={noOfChildrenSeats}
                onChange={(e) => SetNoOfChildrenSeats(e.target.value)}
                type="text"
                placeholder="Number Of Children Seats" />

            <br></br><br></br>


            <div>
            <label>Cabin Class:</label>
            <br></br>
            <select onChange={e => setCabinClass(e.target.value)} value={cabinClass} >
            <option value="Economy"> Economy </option>
            <option value="Business"> Business</option>
            <option value="First"> First</option>
            </select> 
            </div>
            <br></br><br></br>
            
            
                <div>
            {/* <input type="submit" value="search"> */}
                 {/* <SearchResults props={flights}/> */}
                {/* <Link  to="/SearchResults">Search</Link> */}
                {/* </input> */}

                <Link
                to={{
                 pathname: "/SearchResults",
                state: result.data // your data array of objects
                 }}
                >search</Link>
</div>
        </form>
    </div>



   <div>
   {flights.map((flight) => (

                <div key={flight.from} className="flight">
                    <h1>Search Result</h1>
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
                    <p>Number of remaining busuiness seats: {flight.noOfBusinessSeats}</p>
                    <br></br>
                    <p>Business ticket price: {flight.businessPrice}</p>
                    <br></br>
                    <p>Number of remaining economy seats: {flight.noOfEconomySeats}</p>
                    <br></br>
                    <p>Economy ticket price: {flight.economyPrice}</p>
                    <br></br>
                    <p>Number of remaining first class seats: {flight.noOfFirstSeats}</p>
                    <br></br>
                    <p>First class ticket price: {flight.firstClassPrice}</p>
                    <br></br>
                    <p>Baggage Allowance: {flight.baggageAllowance}</p>
                    <br></br>
                    <p>Trip duration: {flight.tripDuration}</p>
                    <br></br>
                    <p>Return flight ID: {flight.returnFlightID}</p>
                    <br></br>   
                    {/* <p>B seats: {flight.availableBusinessSeats}</p> */}
                    <button onClick={(event) => {showSeats(event,flight)}}>Reserve Flight</button>
                    </div>
                ))}
   </div>





    {/* <Switch>
          <Route path="/search-results">
           <SearchResults props = {flights}/>
         </Route>
         </Switch>
    </Router> */}
        </>

)

}

// useEffect(() => {

    // return (
    //      <SearchResults flights = {flights}/>
    // )

    // }, []);

                //



        //          this.setState({
        //       flightNumber: '',
        //       to:'',
        //       from:'',
        //       departureTime:Date,
        //       arrivalTime: Date,
        //       departureTerminal:Number,
        //       arrivalTerminal:Number
        //   })



        // document.title = `You clicked ${flightNumber} times`;

        // [flightNumber , to , from , departureTime , arrivalTime , departureTerminal , arrivalTerminal]

//     async function SearchFlights(event){
//         event.preventDefault();

    //     axios
    //     .post('http://localhost:8000/search-flights', data)
    //     .then(res => {
    //       this.setState({
    //           flightNumber: '',
    //           From:'', const displayFlight = (props) => {
    //           To:'',
    //           departureTime:Date,
    //           arrivalTime: Date,
    //           departureTerminal:Number,
    //           arrivalTerminal:Number
    //       })
    //       console.log("res");
    //       console.log(res);
    //       console.log(res.data);
    //       this.props.history.push('/search-flights',res);

    //   }
    //   )
    //     .catch(err => {
    //         console.log("error");
    //         console.log(err);
    //       console.log("Error in SearchFlight!");
    //     })


// const response = await fetch('http://localhost:8000/search-flights',{
//     method:'POST',
//     headers: {
//         'Content-Type':'application/json',
//     },
//     body: JSON.stringify({
//         flightNumber,
//         to,
//         from,
//         departureTime,
//         arrivalTime,
//         departureTerminal,
//         arrivalTerminal
//     }),   
// }   
// )

// const data = await response.json();
// console.log("data");
// console.log(data);
//     }

//  console.log(data);