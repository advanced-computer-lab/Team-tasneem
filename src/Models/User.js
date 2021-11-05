const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    UserID: {
        "bsonType":"objectId",
        type: Number,
      },
    UserName: {
    type: String,
    required: true,
  },
  FirstName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  IsAdmin: {
    type: Boolean,
    required: true
  },
  LastName: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    
  },
  Email: {
    type: String,
    required: true
  },
  PassportNumber: {
    type: String,
    required: true
  },
  CountryCode: {
    type: Number,
    required: true
  },
  PhoneNumber: {
    type: [Number],
    required: true
  },
  CreditCard: {
    type: [Number],
    required: true
  }
}, { timestamps: true });
mongoose.models = {}
const User = mongoose.model('User', userSchema);
module.exports = User;


