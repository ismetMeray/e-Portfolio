require('dotenv').config();

const { json } = require('body-parser');
const express = require('express');

// import user model
const User = require('../model/user.model');
const router = express.Router();
const userController = require("../controller/user.controller")
router.get("/:id/getAllUserDataById", userController.getUserById)
router.put("/:id/updateUserById", userController.UpdateUserById)


module.exports = router