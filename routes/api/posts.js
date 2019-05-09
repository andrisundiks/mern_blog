const express = require('express');
const router = express.Router();

// Post Model
const Post = require('../../models/Post');

// @route GET api/posts
// @desc Get all Posts
router.get('/', (req, res) => {
    Post.find()
        .then(posts => res.json(posts))
});

// @route POST api/posts
// @desc Creates new Post
router.post('/', (req, res) => {
    const newPost = new Post({
        title: req.body.title,
        body: req.body.body,
        tags: req.body.tags,
        desc: req.body.desc
    });

    newPost.save().then(post => res.json(post))
        .catch(err => res.json({err}))
});

module.exports = router;