const { text } = require("express");
const mongoose = require("mongoose");
const bookchema = mongoose.Schema({
  bid: { type: String },
  title: { type: String },
  coverpageurl: { type: String },
  author: { type: String },
  price: { type: String },
  rating: { type: String },
});
// bookchema.createIndex({
//   bid: "text",
//   title: "text",
//   coverpageurl: "text",
//   author: "text",
// });
//bookchema.createIndex();
module.exports = mongoose.model("Book", bookchema);
