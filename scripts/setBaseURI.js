const hre = require("hardhat");

async function setBaseURI() {
  const [owner] = await hre.ethers.getSigners();

  const BatchNFTs = await hre.ethers.getContractFactory("BatchNFTs");
  const batchNFTs = await BatchNFTs.attach("0x93a4f8d6ae8478Ca0396307dB3fD27B3A1eD0858"); // Replace with your actual contract address

  const newBaseURI = "ipfs://bafybeicujjnglppj4m5chkftun6j74cxoyan7fds4m4xr3452yxpyagn7a";

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
