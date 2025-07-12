const express = require("express");
const productRoutes = express.Router();

const productData = require("../product1.json");

productRoutes.get("/api/productdata", (req, res) => {
  res.json(productData); // ✅ use json() for structured response
});

module.exports = productRoutes;
