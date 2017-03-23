const express = require('express');
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({
                success: false,
                msg: 'Failed to register user!'
            });
        } else {
            res.json({
                success: true,
                msg: 'Successfully registered user!'
            });
        }
    });
});

// Auth
router.post('/authenticate', (req, res, next) => {
    res.send('Authenticate Route');
});

// Profile
router.get('/profile', (req, res, next) => {
    res.send('Profile Route');
});

module.exports = router;
