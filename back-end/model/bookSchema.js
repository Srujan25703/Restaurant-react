const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    phoneNumber: { type: String },
    date: { type: Date },
    noOfPeople: { type: Number },
  },
  {
    collection: "bookings1",
  }
);

module.exports = mongoose.model("bookSchema", bookSchema);
