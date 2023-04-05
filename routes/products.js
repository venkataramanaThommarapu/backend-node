var express = require('express');
var router = express.Router();
var productscontroller = require("../controlers/products");
/* GET users listing. */
router.get('/', productscontroller.getproducts);
router.get('/:id', productscontroller.getproduct);
router.post('/', productscontroller.createproduct);
router.put('/:id', productscontroller.updateproduct);
router.delete('/:id', productscontroller.deleteproduct);


module.exports = router;