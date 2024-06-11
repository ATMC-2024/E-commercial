const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../database/index.js")


const itemSchema = new mongoose.Schema({
  name : String,
  category:String,
  description: String,
  price:Number,
  image:String, //taha (should change it accordingly)
  quantity: Number
});

const Product = mongoose.model("Products",itemSchema)
module.exports = {Product}; 
