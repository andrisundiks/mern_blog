const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const posts = require('./routes/api/posts');

const app = express();
app.use(express.json());
//app.use(cors());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/posts', posts);

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')));

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));