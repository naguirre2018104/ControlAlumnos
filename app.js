"use strict"

var express = require("express");
var bodyParser = require("body-parser");
var userRoutes = require("./routes/user.route");

var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/v1",userRoutes);

/*
app.get("/prueba",(req,res)=>{
    res.status(200).send({message:"Funcionando..."});
})
*/

module.exports = app;