const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FlightSchema = new Schema({
    flightNumber: {
        type: String,
        required: true,
        unique:true
      },
      departureTime: {
        type: Date,
        required: true,
      },
      arrivalTime: {
        type: Date,
        required: true
      },
      noOfEconomySeats: {
        type: Number,
        required: true
      },
      noOfBusinessSeats: {
        type: Number,
        required: true
      },
      noOfFirstSeats: {
        type: Number,
        required: true
      },
      tripDuration: {
        type: Number,
        required: true
      },
      baggageAllowance: {
        type: Number,
        required: true
      },
      economyPrice: {
        type: Number,
        required: true
      },
      firstClassPrice: {
        type: Number,
        required: true
      },
      businessPrice: {
        type: Number,
        required: true
      },
      totalSeats: {
        type: Number,
        required: true
      },
      availableEconomySeats:{
        type: [Number]
      },
      availableBusinessSeats:{
        type: [Number]
      },
      availableFirstSeats:{
        type: [Number]
      },
      returnFlightID: {
        type: Number,
      },
      from: {
        type: String,
        required: true
      },
      to: {
        type: String,
        required: true
      },
      departureTerminal: {
        type: Number,
        required: true
      },
      arrivalTerminal: {
        type: Number,
        required: true
      }
      
    },
    { timestamps: true });
    mongoose.models = {}
    const flight = mongoose.model('flight', FlightSchema);
    module.exports = flight;