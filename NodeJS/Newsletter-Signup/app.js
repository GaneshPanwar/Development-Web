const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

const _API_KEY = "91c5d03b22652b7928065c805555dfc6-us10";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});


app.post("/", function (req, res) {

request.get(_API_KEY, function(){
  
});

app.post("/", function(req, res){


  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };


  const jsonData = JSON.stringify(data);

  const url = "https://us10.api.mailchimp.com/3.0/lists/bc54bfa1c9"

  const options = {
    method: "POST",
    auth: "ganesh:b338fa05cffe91edf11d1d74d4977399-us10"
  }

  const request = https.request(url, options, function (response) {

    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
      
    } else {
      res.sendFile(__dirname + "/failure.html");
      
    }

    response.on("data", function (data) {
      // console.log(JSON.parse(data));
    })

  })
  request.write(jsonData);
  request.end();
});

app.post("/failure", function(req, res){
  res.redirect("/")
});


app.listen(process.env.PORT || 3000, function () {

      
app.listen(3000, function () {

  console.log("Server is running on port 3000");
});


//Searching For Unique Id in mailchamp account 