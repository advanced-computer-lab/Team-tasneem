const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({

    userEmail:{
        type = String
    },
    flightNumber:{
        type = Number
    },
    reservedEconomySeats:{
        type = [Number]
    },
    reservedBusinessSeats:{
        type = [Number]
    },
    reservedFirstSeats:{
        type = [Number]
    }

},
{ timestamps: true });
mongoose.models = {}
const reservations = mongoose.model('reservation', ReservationSchema);
module.exports = reservations;