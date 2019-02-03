const router = require('express').Router();

router.get('/login', (req, res, next) => {
    res.send({
        message: 'Login Route'
    });
});

router.get('/logout', (req, res, next) => {
    res.send({
        message: 'Logout Route'
    });
});

router.get('/signup', (req, res, next) => {
    res.send({
        message: 'Signup Route'
    });
});

module.exports = router;