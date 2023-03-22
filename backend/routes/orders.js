var express = require('express');
var router = express.Router();
const fs = require("fs");
const crypto = require("crypto-js");
const { ObjectId } = require('mongodb');
const orderModel = require ("../models/order-model");
const productModel = require ("../models/product-model");
const UserModel = require ("../models/user-models");

router.get('/', async(req, res, next) => {
    const allOrders = await orderModel.find();
    res.status(200).json(allOrders);
  });

router.get("/:productId", async(req, res) => {
    const product = await orderModel.find().populate("user");
    res.status(200).json(product);
})

router.post("/add", async(req, res) => {
    const order = await orderModel.create(req.body);
   
    /*const products = order.products;
    console.log(products)

    products.forEach(async ({productId, quantity}) => {
        console.log(productId, quantity);
        const product = await productModel.findById({_id: productId});
        console.log("product", product);
    });*/

   
    const orderedProduct = order.products;

    orderedProduct.map(async ({productId, quantity}) => {
      const product = await productModel.findOne({_id: productId});

      let updateStock = product.stock -= quantity;
      let updateProduct = await productModel.updateOne({_id: productId}, {stock: updateStock});
      console.log("update product", updateProduct);
      
    })

    res.status(201).json(orderedProduct);
  })
  

module.exports = router;

