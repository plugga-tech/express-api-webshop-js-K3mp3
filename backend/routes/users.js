var express = require('express');
var router = express.Router();
const fs = require("fs");
const crypto = require("crypto-js");
const { ObjectId } = require('mongodb');
const UserModel = require ("../models/user-models");


/* GET users listing. */
router.get('/', async(req, res, next) => {
  const allUsers = await UserModel.find();
  res.status(200).json(allUsers);
});

router.put("/", async(req, res) => {
  const {_id, username} = req.body;
  const user = await UserModel.findById({_id});

  user.username = username;
  await user.save();
  res.status(200).json(user);
})

router.delete("/:id", async(req, res) => {
  await UserModel.findByIdAndDelete({_id: req.params.id});
  res.status(200).json("User successfully deleted!");
})

router.post("/", async(req, res) => {
  const {_id} = req.body;
  const user = await UserModel.findById({_id});
  res.status(200).json(user);
})

router.post("/add", async(req, res) => {
  console.log("body", req.body);
  let newUser = await UserModel.create({
    username: req.body.username,
    password: crypto.SHA3(req.body.password).toString(),
    email: req.body.email
  });

  console.log("newUser", newUser);
  res.status(201).json(newUser);
})

router.post("/login", async(req, res) => {
  const {username, password, email} = req.body;
  console.log("username, password and email", username, password, email)
  const foundUser = await UserModel.findOne({username: username});

  if(crypto.SHA3(password).toString() === foundUser.password) {
    res.status(201).json({username: foundUser.username, id: foundUser._id})
  } else {
    console.log("fel");
  }
  return;
})

module.exports = router;

