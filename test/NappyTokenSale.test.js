const { expect } = require('chai');
const { BigNumber } = require('ethers');
const { ethers } = require('hardhat');

let nappyTokenSale;
// let nappy;
let owner;
let addr1;
let addr2;

describe('NappyTokenSale', function () {
  //   it("Should return the new greeting once it's changed", async function () {
  //     [owner, addr1, addr2] = await ethers.getSigners();

  //     const NappyTokenSale = await ethers.getContractFactory('NappyTokenSale');
  //     // const initialRate = BigNumber.from(22666);
  //     // .mul(BigNumber.from(10).pow(9))
  //     nappyTokenSale = await NappyTokenSale.deploy(
  //       22666,
  //       addr2.address,
  //       nappy.address
  //     );
  //     await nappyTokenSale.deployed();
  //   });

  it('Should able to buy at  the stage 0', async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    const Nappy = await ethers.getContractFactory('Nappy');
    const initialSupply = BigNumber.from(1000000000).mul(
      BigNumber.from(10).pow(9)
    );
    const nappy = await Nappy.deploy(initialSupply);
    await nappy.deployed();

    const NappyTokenSale = await ethers.getContractFactory('NappyTokenSale');
    nappyTokenSale = await NappyTokenSale.deploy(
      22666,
      addr2.address,
      nappy.address
    );
    await nappyTokenSale.deployed();

    const transferSupply = BigNumber.from(100000000).mul(
      BigNumber.from(10).pow(9)
    );
    await nappy.transfer(nappyTokenSale.address, transferSupply);

    const amount1 = await nappy.balanceOf(owner.address);
    console.log(amount1.toString());

    await nappyTokenSale.buyTokens(addr1.address, {
      value: ethers.utils.parseEther('0.022666'),
    });

    const amount = await nappy.balanceOf(owner.address);
    console.log(amount);
    // expect(await nappy.balanceOf(owner.address).to.be.equal(30000000));
  });
});

//   it('Should able to buy at  the stage 0', async function () {
//     [owner, addr1, addr2] = await ethers.getSigners();

//     const NappyTokenSale = await ethers.getContractFactory('NappyTokenSale');
//     nappyTokenSale = await NappyTokenSale.deploy(
//       22666,
//       addr2.address,
//       addr1.address
//     );
//     await nappyTokenSale.deployed();

//     await nappyTokenSale.buyTokens(addr2.address);
//     expect(await contract.balanceOf(addr2.address).to.equal(10000000009));
//   });

//   it('Should able to buy at  the stage 0', async function () {
//     [owner, addr1, addr2] = await ethers.getSigners();

//     const NappyTokenSale = await ethers.getContractFactory('NappyTokenSale');
//     nappyTokenSale = await NappyTokenSale.deploy(
//       22666,
//       addr2.address,
//       addr1.address
//     );
//     await nappyTokenSale.deployed();

//     await nappyTokenSale.buyTokens(addr1.address);
//     expect(await contract.balanceOf(addr1.address).to.equal(100000));
//   });
// });
