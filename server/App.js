const express = require("express");
const mongoose = require('mongoose');
// THIS IS WRONG NEVER DO THAT !! Only for the task we put the DB Link here!! NEVER DO THAAAT AGAIN !!

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://SOCTE123:SOCTE123@cluster0.4euwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result =>console.log("MongoDB is now connected") )
.catch(err => console.log(err));

MongoClient.connect(uri, function (err, client) {
  var db = client.db('myFirstDatabase');
  if (err) throw err;

//   db.createCollection("reservations", function (err, res) {
//       if (err) throw err;
//       console.log("Collection created!");
      
//   });
//   db.createCollection("users", function (err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     client.close();
// });

// db.createCollection("flights", function (err, res) {
//   if (err) throw err;
//   console.log("Collection created!");
//   client.close();
// });

});

//App variables
const app = express();
const port = process.env.PORT || "8000";
const chalk = require('chalk');
const cors = require('cors')
const flightController = require('./src/Routes/flightController');  //router
const userController = require('./src/Routes/userController');
const reservationController = require('./src/Routes/reservationController');
//middleware

 
app.use(cors())

app.use(express.json());

// const flight =require("./src/models/flight");

app.use('/',flightController);

app.use('/', userController);

app.use('/', reservationController);



// Starting server
app.listen(port, () => {
  console.log(chalk.bold.yellow(`Listening to requests on http://localhost:${port}`));
});