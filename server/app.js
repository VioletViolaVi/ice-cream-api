const express = require("express");

// creates express app
const app = express();

// shows what type of request being made & url where request is being made & response will be gotten

// sets up route
app.get("/", (request, response) => {
  response.send("Welcome to the Ice Cream API");
});

module.exports = app;
