const axios = require('axios');

module.exports = async (url) => {
    try {
        return await axios.get(url);
    }
    catch (e) {
        return e;
    }
};