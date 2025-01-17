const mongoose = require("mongoose");
const schema = mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  Message: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const firstSchema = mongoose.model("SeoDash", schema);
module.exports = firstSchema;
