const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userID: {
        type: Number,
        required: true,
        unique: true
      }, //not auto generated
    username: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true
  },
  lastName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  passportNumber: {
    type: String,
    required: true,
    unique: true
  },
  countryCode: {
    type: Number,
    required: true
  },
  phoneNumber: {
    type: [Number],
    required: true
  },
  creditCard: {
    creditCardNumber: [Number],
    expiryDate: [Date]
  }
}, { timestamps: true });
mongoose.models = {}
const user = mongoose.model('user', userSchema);
module.exports = user;

