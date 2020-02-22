const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"))

app.use(express.urlencoded( {extended:true} ));
app.use(express.json())

app.use(express.static("public"))

//connect to db

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true
});



  //routes
const routes = require("./routes/routes")

app.use(routes)

app.listen(PORT,() => {
    console.log(`app running on port ${PORT}!`);
});