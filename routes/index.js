const getRepos = require('./getRepos');
const defaultRoute = require('./default');

module.exports = app => {
    /* /api/ */
    app.use('/', defaultRoute);

    /* /api/getRepos */
    app.use('/', getRepos);
};