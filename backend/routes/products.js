var express = require('express');
var router = express.Router();
const fs = require("fs");
const crypto = require("crypto-js");
const { ObjectId } = require('mongodb');
const productModel = require ("../models/product-model");

router.get('/', async(req, res, next) => {
    const allProducts = await productModel.find();
    res.status(200).json(allProducts);
  });

router.get("/:productId", async(req, res) => {
    const product = await productModel.findOne();
    res.status(200).json(product);
})

router.post("/add", async(req, res) => {
    let newProduct = await productModel.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      stock: req.body.stock
    });
  
    console.log("newProduct", newProduct);
    res.status(201).json(newProduct);
  })
  

module.exports = router;

