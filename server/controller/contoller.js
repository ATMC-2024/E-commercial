const dataTables = require('../model/models.js')

const getProducts = function (req, res) {
  dataTables.Product.find({})
    .then((items) => {
      res.status(200).send(items);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
//returns an array


const addProduct = function (req, res) {
  dataTables.Product.insertMany(
    {
      name: req.body.name,
      category: req.body.category,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image,
      quantity:req.body.quantity

    })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    })
}
//returns the new object in an array

module.exports = { getProducts, addProduct};
