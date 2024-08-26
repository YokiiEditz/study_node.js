const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/mern-crud-app";
const PORT = 9601;
const app = express();

mongoose.connect(url);
const con = mongoose.connection;

con.on("open", function () {
  console.log("connected!");
});

const routers = require("./routers/all");

app.use("/all", routers);

app.listen(PORT, () => console.log(`Server running on ${PORT} `));
