const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
// import data
const catagories = require("./data/catagories.json");

const cors = require("cors");

app.use(cors());
app.get("/", (req, res) => {
  res.send("server is running");
});

// display data
app.get("/catagories", (req, res) => {
  res.send(catagories);
});

app.listen(port, () => {
  console.log(`Dragon Server is Running From ${port}`);
});
