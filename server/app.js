const express = require("express");

const data = require("./data");

// creates express app
const app = express();

// shows what type of request being made & url where request is being made & response will be gotten

// sets up route
app.get("/", (request, response) => {
  response.send("Welcome to the Ice Cream API");
});

app.get("/flavours", (req, res) => {
  res.json({
    flavours: data.map((singleFlav) => singleFlav["flavour"]),
  });
});

// the ":" makes it a parameter
app.get("/flavours/:id", (req, res) => {
  // extract the parameter from url
  const id = req.params.id;

  // filter data for ice cream with that id
  const filteredData = data.filter(
    // needed to use "==" NOT "===" as the data types are different
    (singleFlavour) => singleFlavour["id"] == id
  );

  // error handling
  if (filteredData.length === 1) {
    res.json({
      flavour: filteredData[0],
    });
  } else {
    res.status(404).json({
      error: "no such ice cream",
    });
  }

  // sends 1st filtered result
  res.json({
    flavour: filteredData[0],
  });
});

module.exports = app;
