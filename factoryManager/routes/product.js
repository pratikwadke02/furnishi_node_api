const express = require('express');
const product = require("../controller/product");
const router = express.Router();

router.post('/product', product.addProduct);
router.get('/product', product.getAllProduct);

module.exports = router;
