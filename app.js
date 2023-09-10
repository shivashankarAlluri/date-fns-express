const express = require("express");
var addDays = require("date-fns/addDays");
const app = express();

app.get("/", (request, response) => {
  const dates = new Date();
  const date = addDays(new Date(dates), 100);
  response.send(
    `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  );
});

module.exports = app;
