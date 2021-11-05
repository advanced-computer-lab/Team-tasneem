// External variables
const express = require("express");
const mongoose = require('mongoose');
const userController = require('./Routes/userController');
const flightsController = require('./Routes/flightsController'); 
// // THIS IS WRONG NEVER DO THAT !! Only for the task we put the DB Link here!! NEVER DO THAAAT AGAIN !!
// const MongoURI =  'mongodb+srv://nadahesham:test1234@cluster0.5uvnx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' ;

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://SOCTE123:SOCTE123@cluster0.4euwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
// const collection = client.db("test").collection("devices");
// var db = client.db('myFirstDatabase');
// if (err) throw err;  
// db.createCollection("User", function(err, res) {  
// if (err) throw err;  
// console.log("Collection is created!");  
// db.close();  
// });  
// // perform actions on the collection object
// client.close();
// });
// var url = "mongodb://localhost:8000/myFirstDatabase";
MongoClient.connect(uri, function (err, client) {
    var db = client.db('myFirstDatabase');
    if (err) throw err;
    //students is a collection we want to create inside db2                            
    // db.createCollection("flights", function (err, res) {
    //     if (err) throw err;
    //     console.log("Collection created!");
    //     client.close();
    // });
});



//App variables
const app = express();
const port = process.env.PORT || "8000";
const User = require('./models/User');
const flights = require('./models/flights');
var cors = require('cors');

// #Importing the userController

app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads// configurations
// Mongo DB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result =>console.log("MongoDB is now connected") )
.catch(err => console.log(err));



app.get("/Home", (req, res) => {
    res.status(200).send("You have everything installed !");
  });

// #Routing to usercontroller here

app.get('/add-user', userController.addUser);
app.post('/add-flights',flightsController.addFlights);
app.get('/list-flights',flightsController.viewflights);
app.get('/update-flights',flightsController.updateflights);
app.get('/delete-flights',flightsController.deleteflight);
// app.get('/view-users',userController.viewUsers)
// app.get('/get-all-users/:name', userController.getUser)
// app.put('/update-user/:id',userController.updateUser)
// app.delete('/delete-user/:id',userController.deleteUser)                                    


// Starting server
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });
