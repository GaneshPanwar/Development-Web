const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {

  res.sendFile(__dirname + "/index.html");

})

app.post("/", function(req, res){
  const apiKey = "7e5f555749f1d07f67797a3baa299fe3";
  const query = req.body.cityName;
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?appid=" + apiKey + "&q=" + query + "&units=" + unit;

  https.get(url, function (response) {
    response.on("data", (d) => {

      const weatherData = JSON.parse(d);
      const temp = weatherData.main.temp;
      const location = weatherData.name;
      const icon = weatherData.weather[0].icon;
      const imgUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

      // console.log(temp);
      res.write("<h1>Hello, Welcome To The Open Weather API </h1>");
      res.write("<h3> Your " + location + " Temperature is " + temp + " degree Celcius</h3>");
      res.write("<img src=" + imgUrl + ">");
      res.send();
    });

  });
});


app.listen(3000, function () {
  console.log("Server is started at port 3000");
});