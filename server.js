const express = require("express")

const app = express();

app.get("/",function(req,res){
  res.send("Hello World")
});

app.get("/contact",function(req,res){
  res.send("Contact me at : mymail@gmail.com")
});

app.get("/about",function(req,res){
  res.send("Insert Bio Here")
});

app.listen(3000,function(){
  console.log("Server has started port 3000")
});
