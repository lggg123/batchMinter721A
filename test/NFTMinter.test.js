const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('NFTMinter', function () {
  let NFTMinter;
  let nftMinter;
  let owner;

  beforeEach(async function () {
    [owner] = await ethers.getSigners();

    // Deploy the NFTMinter contract
    const NFTMinterFactory = await ethers.getContractFactory('BatchNFTs');
    nftMinter = await NFTMinterFactory.deploy();

    // Wait for the contract to be mined
    await nftMinter.deployed();
  });

  it('Should mint an NFT', async function () {
    // Call your mintNFT function
    const metaDataUrl = 'ipfs://bafybeicujjnglppj4m5chkftun6j74cxoyan7fds4m4xr3452yxpyagn7a';
    await nftMinter.mintNFT(owner.address, metaDataUrl);

    // Check if the minting was successful
    const ownerBalance = await nftMinter.balanceOf(owner.address);
    expect(ownerBalance).to.equal(1);

    // You may add more assertions based on your contract logic
  });

  it('Should not mint when inputs are invalid', async function () {
    // Call your mintNFT function with invalid inputs
    const invalidMetaDataUrl = '';
    await expect(nftMinter.mintNFT(owner.address, invalidMetaDataUrl)).to.be.reverted;

    // Check if the balance remains the same
    const ownerBalance = await nftMinter.balanceOf(owner.address);
    expect(ownerBalance).to.equal(0);
  });

  // Add more test cases as needed

  // Example: testing a function that requires a certain role
  it('Should require a certain role for a restricted function', async function () {
    // Assume your contract has a function that requires a specific role
    // For example, a function that only the owner can call
    await expect(nftMinter.restrictedFunction()).to.be.revertedWith('Access denied');

    // Grant the required role to the owner
    await nftMinter.grantRole('ROLE_OWNER', owner.address);

    // Now, the function should succeed
    await nftMinter.restrictedFunction();
  });
});
