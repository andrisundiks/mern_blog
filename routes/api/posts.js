const express = require('express');
const router = express.Router();

const app = express();

// Models
const Post = require('../../models/Post');
const User = require('../../models/User');

// @route GET api/posts
// @desc Get all Posts
router.get('/', (req, res) => {
    Post.find()
        .then(posts => res.json(posts))
});

// @route POST api/posts
// @desc Creates new Post
router.post('/', (req, res) => {

    User.findOne({ username: req.body.username })
        .then(user => {
            if(req.body.password & user.password.startsWith(req.body.password)) {
                const newPost = new Post({
                    title: req.body.title,
                    body: req.body.body,
                    tags: req.body.tags,
                    desc: req.body.desc,
                });

                newPost.save().then(post => res.json(post))
                    .catch(err => res.json({err}))
            }
        }).catch(err => res.json(err));


});

module.exports = router;