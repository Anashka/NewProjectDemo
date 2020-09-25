const mongoose = require("mongoose");
const authorschema = mongoose.Schema({
  id: { type: String },
  name: { type: String },
  biography: { type: String },
  dateofbirth: { type: String },
  email: { type: String },
  listofbooks: { type: String },
});
module.exports = mongoose.model("Author", authorschema);
