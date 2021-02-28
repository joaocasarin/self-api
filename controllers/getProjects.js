const axios = require("axios");

module.exports = class GithubProjects {
  
  async getProjects() {
    return await axios.get(
      `${process.env.GIT_URL}`
    );
  }
}
