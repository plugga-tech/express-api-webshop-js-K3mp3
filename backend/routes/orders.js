var express = require('express');
var router = express.Router();
const fs = require("fs");
const crypto = require("crypto-js");
const { ObjectId } = require('mongodb');
const orderModel = require ("../models/order-model");
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
    res.status(201).json(order);
  })
  

module.exports = router;

