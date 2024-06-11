const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/GreenField";

mongoose.connect(mongoURI, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
  console.log("db connected");
});
const db = mongoose.connection;

module.exports = db