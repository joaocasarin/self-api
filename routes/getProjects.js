const express = require('express');
const router = express.Router();
const GithubProjects = require('../controllers/getProjects');
module.exports = router.get('/projects', async (req, res) => {
    try {
        const githubProjects = new GithubProjects();
        const result = await githubProjects.getProjects();
        res.status(200).send(result);
    }
    catch (e) {
        res.send(e);
    }
});