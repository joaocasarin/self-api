const express = require('express');
const router = express.Router();

module.exports = router.get('/', (req, res) => {
    try {
        res.send('API is working.');
    }
    catch (e) {
        res.send(e);
    }
});