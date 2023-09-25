const express = require("express");
const https = require("https");

const app = express();


https.get("https://api.openweathermap.org/data/2.5/weather",function(res){
console.log(res.statusCode);
})

app.get("/", function (req, res) {
  res.send("<h1>Hello</h1>");
})


app.listen(3000, function () {
  console.log("Server is started at port 3000");
});