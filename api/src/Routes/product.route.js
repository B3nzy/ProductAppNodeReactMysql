const express = require("express");
const {
  getProducts,
  createProducts,
  deletProduct,
  getProduct,
  updateProducts,
} = require("../Controllers/product.controller");
const router = express.Router();

router.get("/getProducts", getProducts);
router.post("/createProducts", createProducts);
router.delete("/deleteProducts/:id", deletProduct);
router.get("/getProduct/:id", getProduct);
router.post("/updateProduct/:id", updateProducts);

module.exports = router;
