const express = require('express');
const router = express.Router();
const getRepos = require('../controllers/getRepos');

module.exports = router.get('/repos', async (req, res) => {
    try {
        // Repos will now contain an array of repos, with each a 'url' property
        const repos = await getRepos(process.env.GIT_URL);
        // Final result will be created here
        const allInfoJson = await Promise.all(
            // Promise.all takes an array of promises and will return when all are resolved
            repos.data.map(repo => getRepos(`https://raw.githubusercontent.com/${repo['full_name']}/master/info.json`))
        );
        // For each element of results, I'll exchange it for only its data
        const result = allInfoJson.map(element => element.data)
        console.log('Repos requested.');
        res.send(result);
    }
    catch (e) {
        res.send(e);
    }
});