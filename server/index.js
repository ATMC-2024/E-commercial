const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const db = require("./database/index.js");  // Import database connection
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Log any database connection errors
db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}!`);
});