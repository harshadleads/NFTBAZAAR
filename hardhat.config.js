/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")

const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()
const projectId = "73d1b4ab5d0d465f9ff3aa2a8a7a0dd6"
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}