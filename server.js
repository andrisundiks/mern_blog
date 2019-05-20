const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;

const posts = require('./routes/api/posts');
const User = require('./models/User');

const secret = "test";

const app = express();
app.use(express.json());

app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));

app.use(
    require('express-session')(
        {
            name: 'site_cookie',
            secret: secret,
            resave: false,
            saveUninitialized: false,
            cookie: {
                // make session cookies only last 15 seconds
                // for the sake of this demo
                maxAge: 150000
            }
        }
    )
);

// using the local strategy with passport
passport.use(
    // calling the constructor given by passport-local
    new Strategy(
        // options for passport local
        {
        },
        // login method
        function (username, password, cb) {
            if (username === user.username && password.toString() === user.password) {
                return cb(null, user);
            }
            // null and false for all other cases
            return cb(null, false);
        }
    )
);

passport.serializeUser(function (user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
    cb(null, user);
});

app.use(passport.initialize());
app.use(passport.session());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/posts', posts);
app.use('/api/login', login);

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')));

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));