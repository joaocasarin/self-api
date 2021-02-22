const express = require('express');
const router = express.Router();
const GitIntegration = require('../controllers/getRepos');
module.exports = router.get('/repos', async (req, res) => {
    try {
        const gitIntegration = new GitIntegration();
        const result = await gitIntegration.getRepos();
        console.log('Repositories requested.');
        res.status(200).send(result);
    }
    catch (e) {
        console.log(e);
        res.send(e);
    }
});