var Token = artifacts.require("./PRC20.sol");
var env = require("../env");

module.exports = async function (deployer, network) {
  const _deployer = deployer.networks[network].from;
  await deployer.deploy(Token, "ThunderCore", "TT", 18, 0);
  const tt_contract = new web3.eth.Contract(Token.abi, Token.address);
  await deployer.deploy(Token, "PALA INT COMM", "PALA", 8, 0);
  const pala_contract = new web3.eth.Contract(Token.abi, Token.address);
  await Promise.all([
    tt_contract.methods.transferOwnership(env.ttOwnerAddress).send({ from: _deployer, gas: 100000 }),
    pala_contract.methods.transferOwnership(env.palaOwnerAddress).send({ from: _deployer, gas: 100000 }),
  ]);
};
