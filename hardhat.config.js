require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
require('hardhat-abi-exporter');

/** @type import('hardhat/config').HardhatUserConfig */

const mnemonic = process.env.MNEMONIC;
const scankey = process.env.ETHERSCAN_API_KEY;
module.exports = {
  solidity: {
    version:"0.8.18",
     settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },

  networks: {
        mainnet: {
        url: "https://mainnet.gateway.tenderly.co",
        accounts: {
            mnemonic,
        },
        chainId: 1,
    },
    sepolia: {
        url: `https://sepolia.infura.io/v3/${encodeURIComponent(process.env.INFURA_API_KEY)}`,
        accounts: [mnemonic
        ],
           },

    goerli: {
        url: "https://rpc.ankr.com/eth_goerli",
        accounts: {
            mnemonic,
        },
        chainId: 5,
    }
},
etherscan: {
    apiKey: scankey
}, 

abiExporter: {
  path: './deployments/abi',
  runOnCompile: true,
  clear: true,
  flat: true,
  spacing: 2,
  pretty: true,
},
};
