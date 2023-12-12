const hre = require("hardhat");

async function main() {

  const latestBlock = await hre.ethers.provider.getBlock("latest")
  //const add100BlocksToCurrent = latestBlock.timestamp + 1000;

  const BatchNFTs = await hre.ethers.getContractFactory("BatchNFTs");
  const batchNFTs = await BatchNFTs.deploy(latestBlock.timestamp, false);

  console.log("Contract deployed to address:", batchNFTs.target);

  console.log(
    `Deploy ERC721A contract and schedule mint to open on block ${latestBlock.timestamp}`,
    `Deployed to https://mumbai.polygonscan.com/address/${batchNFTs.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});