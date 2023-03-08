require('dotenv').config();

// Imports
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

function isAuthenticated(req, res, next) {
    const token = getJsonWebTokenFromRequest(req);
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.JWT_SECRET_TOKEN, (err, user) => {
        if (err) return res.sendStatus(403);
        next();
    });
}

function getJsonWebTokenFromRequest(req) {
    const authHeader = req.headers['authorization'];
    return authHeader;
}

module.exports = { getJsonWebTokenFromRequest, isAuthenticated }