var Ship = artifacts.require("./Ship.sol");

module.exports = function(deployer) {
  let ship;

  return deployer.deploy(Ship, web3.eth.accounts[1], web3.eth.accounts[1], web3.eth.accounts[2], 1e18)
};
