const GameChainSwap = artifacts.require("GameChainSwap");
const GameChainToken = artifacts.require("GameChainToken");
module.exports = async function(deployer) {
// Deploy GameSwap SmartContract - Engine of Swap 
  await deployer.deploy(GameChainSwap);
  const gameChainSwap = await GameChainSwap.deployed()
// Deploy GameSwap Token  
  await deployer.deploy(GameChainToken);
  const gameChainToken = await GameChainToken.deployed()

// All tokens to Swap ( 1 Million ) 
await gameChainToken.transfer(gameChainSwap.address,'1000000000000000000000000000')
};
