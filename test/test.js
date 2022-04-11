const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Our Nappy', () => {
  let nappy;
  let owner;
  let addr1;
  let addr2;

  let preSalePrice = 2266;
  let seedSalePrice = 13600;
  let publicSalePrice = 3400;

  beforeEach(async () => {
    [owner, addr1, addr2] = await ethers.getSigners();

    const Nappy = await ethers.getContractFactory('Nappy');
    const nappy = await Nappy.deploy(1000000000);
    await nappy.deployed();

    const NappyTokenSale = await ethers.getContractFactory('NappyTokenSale');
    const nappyTokenSale = await NappyTokenSale.deploy(
      22666,
      addr1.address,
      addr2.address
    );
    await nappyTokenSale.deployed();
  });

  it('Should deploy with 100M supply for the owner of the contract', async () => {
    const balance = await nappy.balanceOf(owner.address);
    expect(ethers.utils.formatEther(balance) == 1000000000);
  });

  it('Should able to send token to other address', async () => {
    await nappy.transfer(addr1.address, ethers.utils.parseEther('1000'));
    expect(await contract.balanceOf(addr1.address)).to.equal(
      ethers.utils.parseEther('1000')
    );
  });

  it('Should able to buy at  the stage 0', async () => {
    await nappyTokenSale.buyTokens(addr1.address);
    expect(await contract.balanceOf(addr1.address).to.equal(2));
  });

  it('Should able to buy at  the stage 1', async () => {
    await nappyTokenSale.buyTokens(addr2.address);
    expect(await contract.balanceOf(addr2.address).to.equal(4));
  });

  it('Should able to buy at  the stage 2', async () => {
    await nappyTokenSale.buyTokens(addr1.address);
    expect(await contract.balanceOf(addr1.address).to.equal(8));
  });
});
