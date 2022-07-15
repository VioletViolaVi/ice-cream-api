const express = require("express");
const cors = require("cors");

const data = require("./data");

// creates express app
const app = express();

// tell the app to listen to JSON bodies on POST requests
app.use(express.json());

// adds "headers" to each response, saying that we're okay w/ sharing resources with others
app.use(cors());

// shows what type of request being made & url where request is being made & response will be gotten

// sets up route
app.get("/", (request, response) => {
  response.send("Welcome to the Ice Cream API");
});

app.get("/flavours", (req, res) => {
  let flavours = data;

  if (req.query.vegan === "true") {
    flavours = flavours.filter((singleFlav) => singleFlav["vegan"]);
  }

  res.json({
    flavours: flavours.map((singleFlav) => singleFlav["flavour"]),
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
    // sends 1st filtered result
    res.json({
      flavour: filteredData[0],
    });

    // checks if it can be json, stringifies it, tells the client that its a particular type and sends it a the body
  } else {
    res.status(404).json({
      error: "no such ice cream",
    });
  }
});

// used to add more ice cream flavours
app.post("/flavours", (req, res) => {
  //   console.log(req.body);

  const newFlavour = req.body;
  newFlavour["id"] = data.length + 1;
  data.push(newFlavour);

  res.status(201).json({
    success: true,
    flavour: newFlavour,
  });
});

module.exports = app;
