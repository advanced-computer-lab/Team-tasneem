const Flights = require('../models/flights');
exports.addFlights = (req, res) => {
    console.log(req.body.flight);
    const flights = new Flights(req.body.flight);
  
    flights.save()
      .then(result => {
        res.send(result);
        console.log("added");
      })
      .catch(err => {
        console.log(err);
      });
  };
  // getting all the flights

exports.viewflights = (req, res) => {
  console.log("sdf0");                                         
User.find({})
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    console.log(err);
  });
};

exports.getflights = (req, res) => {
    User.find({Name:req.params.name})
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
  };


  // Update flights
  exports.updateflights = (req,res)=>{
    User.findByIdAndUpdate(req.params.id,req.body).then(result =>{

        res.status(200).send("Flight updated ");
        console.log('The Flights is Updated successfully !');
    }).catch(err => {
        console.log(err);
      });

  };

  //Deleting an existing Flight
  exports.deleteflight = (req,res)=>{
    User.findByIdAndRemove(req.params.id).then(result =>{

        res.status(200).send("Flight Deleted ");
        console.log("The Flight is deleted successfully !");
    }).catch(err => {
        console.log(err);
      });

  };
