const hre = require("hardhat");

async function main() {

    const contractAddress = "0xdc2f3d006ed7704c02CF6123b55E2C2fA434D491";
    const recieverAddress = "0xEA3AF2F7fC9FD23DAEa15D8d5E38B510E6830780"
    const batchNFTs = await hre.ethers.getContractAt("BatchNFTs", contractAddress);

    const mintTokens = await batchNFTs.mint(recieverAddress, 3, { value: ethers.utils.parseEther("0.03") });
    console.log(`Transaction Hash: https://mumbai.polygonscan.com/tx/${mintTokens.hash}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});