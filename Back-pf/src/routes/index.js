require('dotenv').config();
const { Router } = require("express");
const { getProducts, postProduct } = require("./controllers.js");
const router = Router();



router.get('/products', getProducts);

router.post('/products', postProduct);

module.exports = router;