const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');

// Login handle
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
    }, () => {
        res.json({ "success": req.body })
    })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
    req.logout();
    res.json({ "Now logged out, ": "yo" });
});

module.exports = router;