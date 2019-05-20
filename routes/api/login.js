const express = require('express');
const router = express.Router();
const passport = require("passport");
const Strategy = require('passport-local').Strategy;

const User = require('../../models/User');

router.post('/login',
    passport.authenticate('local', {
        // redirect back to /login
        // if login fails
        failureRedirect: '/login'
    }),

    // end up at / if login works
    function (req, res) {
        res.redirect('/');
    }
);