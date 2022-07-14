const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static("Public"));

let items = ["Exercise", "Ready", "Breakfast", "Mail"];
app.get("/", function (req, res) {
  const today = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let currentDay = today.toLocaleDateString("en-US", options);

  res.render("day", { kindDay: currentDay, newListItems: items });
});

app.post("/", function (req, res) {
  var item = req.body.newitem;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("app is running on port 3000!!");
});
