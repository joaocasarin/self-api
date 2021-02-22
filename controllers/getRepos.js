const axios = require("axios");

module.exports = class GitIntegration {
  async getRepos() {
    try {
      const repos = await this.getGitReposByUser(process.env.USER);
      const allInfoJson = await this.allInfoJson(repos);

      const result = allInfoJson.map((element) => element);
      return result;
    } catch (e) {
      return e;
    }
  }

  async getGitReposByUser(user) {
    return await axios.get(
      `${process.env.GIT_URL}/${user}/repos`
    );
  }

  async allInfoJson(repos) {
    return await Promise.all(
      repos.data.map(async (repo) => {
        const getInfo = await axios.get(
          `https://raw.githubusercontent.com/${repo["full_name"]}/master/info.json`
        );

        return {
          name: getInfo.data['name'],
          desc: getInfo.data['desc'],
          logo: getInfo.data['logo'],
          url: repo['html_url']
        };
      }
      )
    );
  }
}
