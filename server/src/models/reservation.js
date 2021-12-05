const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// add price!  navigate for redirection

const ReservationSchema = new Schema({

    userEmail:{
        type : String,
    },
    flightNumber:{
        type : Number
    },
    returnFlightNumber:{
        type : Number
    },
    totalPrice:{
        type : Number
    },
    reservedSeats:{
        type : [Number]
    },
    returnReservedSeats:{
        type : [Number]
    },
    ticketType:{
        type : String
    }

},
{ timestamps: true });
mongoose.models = {}
const reservations = mongoose.model('reservation', ReservationSchema);
module.exports = reservations;