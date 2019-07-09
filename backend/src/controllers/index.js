const express = require('express');
const tokenVerify = require('../auth');
const evento = require('../models/evento');

const router = express.Router();


router.get('/search', (req, res, next) => {
    evento.find().then(result => {
        return res.json(result);
    }, err => {
        return res.status(500);
    });
});

module.exports = router;