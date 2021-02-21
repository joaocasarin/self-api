const express = require('express');
const router = express.Router();
const getRepos = require('../controllers/getRepos');

module.exports = router.get('/repos', async (req, res) => {
    try {
        const result = await getRepos();
        console.log('Repositories requested.');
        res.send(result);
    }
    catch (e) {
        console.log(e);
        res.send(e);
    }
});