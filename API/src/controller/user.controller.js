const User = require('../model/user.model');
const {returnAsObject} = require('../helpers/general.helper');
var ObjectId = require('mongoose').Types.ObjectId; 


exports.getAllUsers = async (req,res) => {
    return returnAsObject(User, {}, res);
}

exports.getUserById = async (req,res) => {

    return returnAsObject(User, {_id: req.params.id}, res);
}

exports.UpdateUserById = async (req, res) => {

    let newData = req.body;
    let newUserDate = await User.findOneAndUpdate(req.params.id, newData)

    console.log(newUserDate.skills)

    res.json(200)
}