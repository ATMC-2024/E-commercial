const router = require('express').Router();
const ProductsController = require('../controller/contoller.js')



router.post('/addProduct', ProductsController.addProduct)
router.get('/getProducts', ProductsController.getProducts)

module.exports = router;