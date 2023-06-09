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

router.get("/:id", async(req, res) => {
  try {
    const product = await productModel.findById(req.params.id);

    res.status(200).json(product);
    console.log(product);
  } catch (err) {
    console.log("Err", err);
    res.status(401).json({message: "Wrong id, please try again"});
  }
})

router.post("/add", async(req, res) => {
  let token  = req.body.token
  console.log("token", token)
  
  if(token === process.env.TOKEN_URI) {
      let newProduct = await productModel.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock,
        category: req.body.category
      });
      console.log(newProduct);
    
      console.log("newProduct", newProduct);
      res.status(201).json(newProduct);
  } else {
      res.status(401).json("unauthorised, wrong token")
  }
  })
  

module.exports = router;

