const router = require('express').Router();
const Blog = require('../models/blog');

router.get('/blogs', (req, res, next) => {
    Blog.find({})
        .then((blogs) => res.send(blogs))
        .catch(next);
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
    Blog.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(() => {
            Blog.findOne({ _id: req.params.id })
                .then((blog) => res.send(blog))
                .catch(next);
        })
        .catch(next);
});

router.delete('/blog/:id', (req, res, next) => {
    Blog.findOneAndDelete({ _id: req.params.id })
        .then((blog) => res.send(blog))
        .catch(next);
});

module.exports = router;