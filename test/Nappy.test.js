const { expect } = require('chai');
const { BigNumber } = require('ethers');
const { ethers } = require('hardhat');

describe('Nappy', function () {
  it('Should give correct symbol of the token', async function () {
    const Nappy = await ethers.getContractFactory('Nappy');
    const initialSupply = BigNumber.from(1000000000).mul(
      BigNumber.from(10).pow(9)
    );
    const nappy = await Nappy.deploy(initialSupply);
    await nappy.deployed();

    expect(await nappy.symbol()).to.equal('NPY');
  });

  it('Should give correct decimals of the token', async function () {
    const Nappy = await ethers.getContractFactory('Nappy');
    const initialSupply = BigNumber.from(1000000000).mul(
      BigNumber.from(10).pow(9)
    );
    const nappy = await Nappy.deploy(initialSupply);
    await nappy.deployed();

    expect(await nappy.decimals()).to.equal(9);
  });

  it('Should give the correct name of the token', async function () {
    const Nappy = await ethers.getContractFactory('Nappy');
    const initialSupply = BigNumber.from(1000000000).mul(
      BigNumber.from(10).pow(9)
    );
    const nappy = await Nappy.deploy(initialSupply);
    await nappy.deployed();

    expect(await nappy.name()).to.equal('Nappy');
  });
});
