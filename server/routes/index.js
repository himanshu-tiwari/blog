const express = require('express');
const router = express.Router();

router.get('/blogs', (req, res) => {
    res.send({
        type: 'GET'
    });
});

router.post('/blogs', (req, res) => {
    res.send({
        type: 'POST'
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