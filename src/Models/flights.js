const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FlightSchema = new Schema({
    FlightID: {
        "bsonType":"objectId",
        type: Number,
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
      noOfBussinessSeats: {
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
      price: {
        type: Number,
        required: true
      },
      totalSeats: {
        type: Number,
        required: true
      },
      returnFlightID: {
        type: Number,
        
      },
      From: {
        type: String,
        required: true
      },
      To: {
        type: String,
        required: true
      },
      flightNumber: {
        type: String,
        required: true
      }
    }, { timestamps: true });
    mongoose.models = {}
    const flights = mongoose.model('flights', FlightSchema);
    module.exports = flights;