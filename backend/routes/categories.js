var express = require('express');
var router = express.Router();
const fs = require("fs");
const crypto = require("crypto-js");
const { ObjectId } = require('mongodb');
const categoryModel = require ("../models/category-model");

router.get('/', async(req, res, next) => {
    const allProducts = await productModel.find();
    res.status(200).json(allProducts);
  });

router.get("/:productId", async(req, res) => {
    const product = await productModel.findById();
    res.status(200).json(product);
})

router.post("/add", async(req, res) => {
    let token  = req.body.token
    console.log("token", token)
    
    if(token === process.env.TOKEN_URI) {
        let newCategory = await categoryModel.create({
            name: req.body.name,
        })
        console.log("newProduct", newCategory);
        res.status(201).json(newCategory);
    } else {
        res.status(401).json("unauthorised, wrong token")
    }
  })
  

module.exports = router;

