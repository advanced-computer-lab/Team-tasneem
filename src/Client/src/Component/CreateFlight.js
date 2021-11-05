import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import '../App.css';
import axios from 'axios';


class CreateFlight extends Component {
  constructor() {
    super();
    this.state = {
        flightNumber: '',
        From:'',
        To:'',
        departureTime:Date,
        arrivalTime: Date,
        tripDuration: Number ,
        baggageAllowance:Number,
        totalSeats:Number,
        noOfEconomySeats: Number,
        noOfBussinessSeats: Number,
        noOfFirstSeats: Number,
        price:Number,
        returnFlightID:Number

    };
  }

  onChange = e => {
    this.setState({...this.state, [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      flight: {
      flightNumber: this.state.flightNumber,
        From:this.state.From,
        To:this.state.To,
        departureTime:this.state.departureTime,
        arrivalTime: this.state.arrivalTime,
        tripDuration:this.state.tripDuration,
        baggageAllowance:this.state.baggageAllowance,
        totalSeats:this.state.totalSeats,
        noOfEconomySeats: this.state.noOfEconomySeats,
        noOfBussinessSeats: this.state.noOfBussinessSeats,
        noOfFirstSeats: this.state.noOfFirstSeats,
        price:this.state.price, 
         returnFlightID:this.state.returnFlightID
      }
    };

    axios
      .post('http://localhost:8000/add-flights', data)
      .then(res => {
        this.setState({
            flightNumber: '',
            From:'',
            To:'',
            departureTime:Date,
            arrivalTime: Date,
            tripDuration: Number ,
            baggageAllowance:Number,
            totalSeats:Number,
            noOfEconomySeats: Number,
            noOfBussinessSeats: Number,
            noOfFirstSeats: Number,
            price:Number,
            returnFlightID:Number
    
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateFlight!");
      })
  };

  render() {
    return (
      <div className="CreateFlight">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Flights List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Flight</h1>
              <p className="lead text-center">
                  Create new Flight
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                    <label>Flight Number</label>
                  <input
                    type='text'
                    placeholder='Enter Flight Number'
                    name='flightNumber'
                    className='form-control'
                    //value={this.state.flightNumber}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                <label>From</label>
                  <input
                    type='text'
                    placeholder='From'
                    name='From'
                    className='form-control'
                    //value={this.state.From}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                <label>To</label>
                  <input
                    type='text'
                    placeholder='To'
                    name='To'
                    className='form-control'
                    //value={this.state.To}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                <label>Departure </label>
                  <input
                    type='date'
                    placeholder='Departure Time'
                    name='departureTime'
                    className='form-control'
                    //value={this.state.departureTime}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                <label>Arrival </label>
                  <input
                    type='date'
                    placeholder='Arrival Time'
                    name='arrivalTime'
                    className='form-control'
                     //value={this.state.arrivalTime}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                <label>Trip Duration</label>
                  <input
                    type='number'
                    placeholder=' Trip Duration'
                    name='tripDuration'
                    className='form-control'
                    //value={this.state.tripDuration}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                <label>Baggage Allowance</label>
                  <input
                    type='number'
                    placeholder='Baggage Allowance'
                    name='baggageAllowance'
                    className='form-control'
                     //value={this.state.baggageAllowance}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                <label>Total Seats</label>
                  <input
                    type='number'
                    placeholder='Total Seats'
                    name='totalSeats'
                    className='form-control'
                    ////value={this.state.totalSeats}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                <label>Number of Economy Seats</label>
                  <input
                    type='number'
                    placeholder='Number of Economy Seats'
                    name='noOfEconomySeats'
                    className='form-control'
                    // //value={this.state.noOfEconomySeats}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                <label>Number of Business Seats</label>
                  <input
                    type='number'
                    placeholder='Number of Business Seats'
                    name='noOfBussinessSeats'
                    className='form-control'
                    // //value={this.state.noOfBussinessSeats}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                <label>Number of First Class Seats</label>
                  <input
                    type='number'
                    placeholder='Number of First Class Seats'
                    name='noOfFirstSeats'
                    className='form-control'
                    // //value={this.state.noOfFirstSeats}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                <label>Price</label>
                  <input
                    type='number'
                    placeholder='Price'
                    name='price'
                    className='form-control'
                    // //value={this.state.price}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                <label>Return Flight ID</label>
                  <input
                    type='number'
                    placeholder='Return Flight ID'
                    name='returnFlightID'
                    className='form-control'
                    // //value={this.state.returnFlightID}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                    onClick={this.onSubmit}
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateFlight;