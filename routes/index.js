const getProjects = require('./getProjects');
const defaultRoute = require('./default');

module.exports = app => {
    /* /api/ */
    app.use('/', defaultRoute);

    /* /api/getProjects */
    app.use('/', getProjects);
};