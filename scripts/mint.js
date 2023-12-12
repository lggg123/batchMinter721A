const { ethers } = require("hardhat");

async function main() {
    const contractAddress = "0xb08DD6139230fB9b14836e0d493717665D390364";
    const recieverAddress = "0xEA3AF2F7fC9FD23DAEa15D8d5E38B510E6830780"
    const batchNFTs = await hre.ethers.getContractAt("BatchNFTs", contractAddress);

    const mintTokens = await batchNFTs.mint(recieverAddress, 2657, { value: "2678000000000000000" }); // 0.03 ETH in wei
    console.log(`Transaction Hash: https://mumbai.polygonscan.com/tx/${mintTokens.hash}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});