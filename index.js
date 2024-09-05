const express = require("express");

const app = express();

const PORT = 9601;

// const routers = require("./routers/all");

// app.use("/all", routers);

app.get("/", (req, res) => {
  res.send({ message: "hello world!!!" });
});

app.get("/about", (req, res) => {
  res.send("about page");
});

app.listen(PORT, () => console.log(`Server running on ${PORT} `));
