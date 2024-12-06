const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json('Posts');
});

router.get('/specific', (req, res) => {
    const post = req.body;
});

module.exports = router;