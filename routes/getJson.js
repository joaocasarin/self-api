const express = require('express');
const router = express.Router();
const getRepos = require('../controllers/getJson');

module.exports = router.get('/getRepos', async (req, res) => {
    try {
        /* getRepos(process.env.GIT_URL).then(axios_res => {
            let repos = [];
            axios_res.data.forEach(element => {
                repos.push({
                    name: element['name'],
                    desc: element['description'],
                    url: element['html_url'],
                    symbol: element['name'][0].toUpperCase()
                });
            });

            res.send(repos);
        }); */

        // Repos will now contain an array of repos, with each a 'url' property
        const repos = await getRepos(process.env.GIT_URL);
        // Final result will be created here
        const allInfoJson = await Promise.all(
            // Promise.all takes an array of promises and will return when all are resolved
            repos.data.map(repo => getRepos(`https://raw.githubusercontent.com/${repo['full_name']}/master/info.json`))
        );
        // For each element of results, I'll exchange it for only its data
        const result = allInfoJson.map(element => element.data)
        
        res.send(result);
    }
    catch (e) {
        res.send(e);
    }
});