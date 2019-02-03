const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

router.get('/blogs', (req, res, next) => {
    res.send({
        type: 'GET'
    });
});

router.get('/blog', (req, res, next) => {
    res.send({
        type: 'GET'
    });
});

router.post('/blog', (req, res, next) => {
    Blog.create(req.body)
        .then((blog) => res.send(blog))
        .catch(next);
    const { title, contents } = req.body;
});

router.put('/blog/:id', (req, res, next) => {
    res.send({
        type: 'PUT'
    });
});

router.delete('/blog/:id', (req, res, next) => {
    Blog.findByIdAndRemove({ _id: req.params.id })
        .then((blog) => res.send(blog))
        .catch(next);
});

module.exports = router;