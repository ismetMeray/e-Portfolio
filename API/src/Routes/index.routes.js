const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware'); // Middleware.js

const auth = require('./auth.routes');
const user = require('./user.routes');

router.use('/auth', auth);
router.use('/user', authMiddleware.isAuthenticated, user)

module.exports = router;
