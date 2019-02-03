const express = require('express');
const router = express.Router();

router.get('/blogs', (req, res) => {
    res.send({
        type: 'GET'
    });
});

router.post('/blogs', (req, res) => {
    const { title, contents } = req.body;
    res.send({
        type: 'POST',
        title,
        contents
    });
});

router.put('/blogs/:id', (req, res) => {
    res.send({
        type: 'PUT'
    });
});

router.delete('/blogs/:id', (req, res) => {
    res.send({
        type: 'DELETE'
    });
});

module.exports = router;