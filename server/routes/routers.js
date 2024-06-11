const router = require('express').Router();
const ProductsController = require('../controller/contoller.js')



router.post('/addProduct', ProductsController.addProduct)

module.exports = router;