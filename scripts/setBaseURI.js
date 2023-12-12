const hre = require("hardhat");

async function setBaseURI() {
  const [owner] = await hre.ethers.getSigners();

  const BatchNFTs = await hre.ethers.getContractFactory("BatchNFTs");
  const batchNFTs = await BatchNFTs.attach("0xb08DD6139230fB9b14836e0d493717665D390364"); // Replace with your actual contract address

  const newBaseURI = "ipfs://bafybeifepouvjudkc6ccybnxxfmesif4aothbm4wkcxa5gi6snxe3yco44/";

  // Connect to the contract with the owner's signer
  const contractWithSigner = batchNFTs.connect(owner);

  // Call the setBaseURI function
  await contractWithSigner.setBaseURI(newBaseURI);

  console.log("BaseURI set successfully!");
}

setBaseURI().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
