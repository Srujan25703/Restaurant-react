const express = require("express");
const mongoose = require("mongoose");
const bookRoute = require("./controller/bookRoute");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb+srv://test:12345@cluster0.xedmcjn.mongodb.net/Restaurantdb"
);
var db = mongoose.connection;
db.on("open", () => console.log("Connected to DB"));
db.on("error", () => console.log("Error occured"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", bookRoute);

app.listen(4000, () => {
  console.log("server started at 4000");
});
