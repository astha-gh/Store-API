const express = require('express');
const router = express.Router();

const {getAllProducts , getAllProductsStactic} = require('../controllers/products');

router.route('/').get(getAllProducts);
router.route('/static').get(getAllProductsStactic);

module.exports = router;