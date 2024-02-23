const express = require('express');
const product = require("../controller/product");
const router = express.Router();

router.get('/product', product.getProducts);

module.exports = router;
