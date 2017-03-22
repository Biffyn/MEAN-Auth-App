const express = require('express');
const router = express.Router();

// Register
router.get('/register', (req, res, next) => {
  res.send('Register Route');
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
