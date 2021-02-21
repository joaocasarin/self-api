const getRepos = require('./getJson');
const defaultRoute = require('./default');

module.exports = app => {
    /* /api/ */
    app.use('/api', defaultRoute);

    /* /api/getRepos */
    app.use('/api', getRepos);
};