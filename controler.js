const Apis = require("./apis");

class Controller {
  constructor() {}

  async GetBanksData() {
    const myApis = new Apis();
    const data = await myApis.getBanks();
  }
}

module.exports = Controller;
