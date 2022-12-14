const mongoose = require('mongoose');
const User = require('../model/user.model');

exports.returnAsObject = async function (model, filter, res) {
    model.find(filter, function (err, models) {
        if (models.length < 1) {
            res.status(404);
            return res.status(400).send({
                message: 'No user found'
            });
        }
        let modelMap = {};
        models.forEach(function (model) {
            modelMap[model._id] = model;
        });
        res.send(modelMap);
    });
}
exports.doesUserExists = async function (user) {
    if (await User.findOne({ username: user.username })) {
        return true;
    }

    return false;
}