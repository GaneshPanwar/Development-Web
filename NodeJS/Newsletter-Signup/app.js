const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

const _API_KEY = "91c5d03b22652b7928065c805555dfc6-us10";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

request.get(_API_KEY, function(){
  
});

app.post("/", function(req, res){

  var firstName = req.body.fName;
  var lastName  = req.body.lName;
  var email = req.body.email;

  console.log(firstName, lastName, email);

});

      
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});


//Searching For Unique Id in mailchamp account 