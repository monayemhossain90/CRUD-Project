const express = require("express");
const ProductController = require("../controllers/ProductsController");
const router =express.Router();

// API 

router.post("/insertProduct",ProductController.insertProduct);
router.get("/readProduct",ProductController.readProduct);
router.get("/readProductById/:id",ProductController.readProductById )
router.post("/updateProduct/:id",ProductController.updateProduct)
router.post("/deleteProduct/:id",ProductController.deleteProduct)


module.exports = router;