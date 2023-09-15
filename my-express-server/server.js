const express = require("express");

const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello, World!</h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact Me at: ganesh@gmail.com");
});

app.get("/about", function(req, res){
res.send("Hello Everyone, My Name is Ganesh and I am Learning Web Development");
});


app.listen(3000, function(){
  console.log("Server is started at port 3000");
});