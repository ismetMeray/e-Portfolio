const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json())
require('dotenv').config();
var user = require("./src/model/user.model");

var uri2 = 'mongodb://db:27017/portfolio'
var uri = "mongodb://portfolio-mongodb:27017/portfolio";
// var uri = "mongodb://127.0.0.1:27017/portfolio";
mongoose.connect(uri2, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

const routes = require('./src/Routes/index.routes')

app.use('/api', routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server running on localhost 3000");
});