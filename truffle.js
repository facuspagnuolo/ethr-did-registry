const TestRPC = require("ganache-cli");

module.exports = {
  networks: {
    development: {
      provider: TestRPC.provider({port: 7545}),
      network_id: "*" // Match any network id
    },
    local: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
      gas: 5000000,
      gasPrice: 2e9, // 2 Gwei
    },
    ropsten: {
      host: 'localhost',
      port: 8565,
      network_id: 3,
      gas: 500000,
      gasPrice: 10e9, // 10 Gwei
    },
    rinkeby: {
      host: 'localhost',
      port: 8565,
      network_id: 4,
      gas: 500000,
      gasPrice: 10e9, // 10 Gwei
    },
    kovan: {
      host: 'localhost',
      port: 8555,
      network_id: 42,
      gas: 500000,
      gasPrice: 10e9, // 10 Gwei
    },
  }
};
