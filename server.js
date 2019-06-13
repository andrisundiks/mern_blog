const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');
const passport = require('passport');

const posts = require('./routes/api/posts');
const users = require('./routes/api/users');

const app = express();

// Passport config
require('./config/passport')(passport);

app.use(express.json());

app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));

// Express Session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}));

// Passport middleware
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
app.use('/api/users', users);

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')));

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));