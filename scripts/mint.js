const { ethers } = require("hardhat");

async function main() {
    const contractAddress = "0xaB7090401A053f5B5b3e6da815ef62B6bDc5E416";
    const recieverAddress = "0xEA3AF2F7fC9FD23DAEa15D8d5E38B510E6830780"
    const batchNFTs = await hre.ethers.getContractAt("BatchNFTs", contractAddress);

    const mintTokens = await batchNFTs.mint(recieverAddress, 2657, { value: "26570000000000000000" }); // 0.03 ETH in wei
    console.log(`Transaction Hash: https://mumbai.polygonscan.com/tx/${mintTokens.hash}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});