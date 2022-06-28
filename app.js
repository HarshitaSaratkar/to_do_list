const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const date = new Date();
  let numericDay = date.getDay();
  let day = "";

  switch (numericDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
    default:
  }
  res.render("day", { kindDay: day });
});

app.listen(3000, function () {
  console.log("app is running on port 3000!!");
});
