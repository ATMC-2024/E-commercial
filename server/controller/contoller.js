const dataTables = require('../model/models.js')

const selectAll = function (req, res) {
  dataTables.Product.find({})
    .then((items) => {
      res.status(200).send(items);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};


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

module.exports = { selectAll, addProduct};
