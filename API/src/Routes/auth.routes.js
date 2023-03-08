require('dotenv').config();

const { json } = require('body-parser');
const express = require('express');
const jwt = require('jsonwebtoken');

// import user model
const User = require('../model/user.model');

const router = express.Router();

router.post('/login', async (req, res) => {
    console.log("login")
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.json([{ errorMessage: 'Combinatie van gebruikersnaam en wachtwoord is verkeerd.' }]);
    if (user) {
        if (!await user.isValidPassword(req.body.password)) return res.json([{ errorMessage: 'Combinatie van gebruikersnaam en wachtwoord is verkeerd.' }]);
    }
    const accessToken = await generateAccessToken(user);
    res.json({ jwt_token: accessToken });
});

router.post('/register', async (req, res) => {
    console.log(req.body)
    const jsonUser = req.body;
    if (await User.findOne({ username: jsonUser.username })!= null) {
        return res.json({
            status: 'Failed',
            message: 'Username already in use.'
        });
    }
    if (await User.findOne({ email: jsonUser.email }) != null) {
        return res.json({
            status: 'Failed',
            message: 'Email already in use.'
        });
    }
    const user = new User({ username: jsonUser.username, password: jsonUser.password, email: jsonUser.email });
    await user.hashPassword();
    user.save();
    return res.json({
        status: 'Success',
        message: 'User registered succesfully.'
    })
});

async function generateAccessToken(user) {
    // Payload (data) of jwt &* Do not put sensitive data like a password in the payload **
    const payload = { id: user._id, username: user.username};
    console.log(payload)
    // sign a jwt token with the payload
    return jwt.sign(payload, process.env.JWT_SECRET_TOKEN);
}

module.exports = router;


