const express = require("express");

const router = express.Router();

const {
  createProduct,
  getAllproducts,
  deleteProduct,
  updateProduct,
  getProduct,
} = require("../controller/allproducts");

//create API routes
router.post("/createProduct", createProduct);
//get all products
router.get("/getAllProducts", getAllproducts);
//delete product
router.delete("/deleteProduct/:id", deleteProduct);
//update product
router.put("/updateProduct/:id", updateProduct);
//get a product
router.get("/getProduct/:p_id", getProduct);

module.exports = router;
