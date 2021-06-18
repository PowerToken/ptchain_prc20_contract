let env = require('./env');
let WalletProvider = require('truffle-wallet-provider');
let Wallet = require('ethereumjs-wallet');

module.exports = {
  // Solidity compiler configuration
  solc: {
    // Optional: Optimizer settings
    optimizer: {
      // Disabled by default
      enabled: true,
      // Optimize for how many times you intend to run the code.
      // Lower values will optimize more for initial deployment cost, higher values will optimize more for high-frequency usage.
      runs: 200
    }
  },
  networks: {
    development: {
      // provider - Web3 provider instance Truffle should use to talk to the Ethereum network.
      //          - Make sure wallet providers in a function closure to ensure that only one network is ever connected at a time.
      provider: function() {
        return new WalletProvider(Wallet.fromPrivateKey(Buffer.from(env.privateKey, 'hex')), env.ptchainUrl);
      },
      // network_id - '*' means match any network id
      network_id: '*',
      // gas - Gas limit
      gas: 4700000,
      // gasPrice - Use 0 Gwei
      gasPrice: 0
    }
  }
}
