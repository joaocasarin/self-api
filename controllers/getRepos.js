const axios = require('axios');

module.exports = async () => {
    try {
        const repos = await axios.get(process.env.GIT_URL);

        const allInfoJson = await Promise.all(
            repos.data.map(repo => axios.get(`https://raw.githubusercontent.com/${repo['full_name']}/master/info.json`))
        );
        
        const result = allInfoJson.map(element => element.data);
        return result;
    }
    catch (e) {
        return e;
    }
};