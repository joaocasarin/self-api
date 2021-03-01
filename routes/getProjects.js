const express = require('express');
const router = express.Router();
const GithubProjects = require('../controllers/getProjects');
module.exports = router.get('/projects', async (req, res) => {
    try {
        const githubProjects = new GithubProjects();
        const result = await githubProjects.getProjects();
        if (result.data) {
            res.status(200).send(result.data);
        }
        else {
            res.send([])
        }
    }
    catch (e) {
        res.send(e);
    }
});