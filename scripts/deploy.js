const hre = require('hardhat');
const { BigNumber } = require('ethers');

async function main() {
  const [owner] = await ethers.getSigners();

  const Nappy = await hre.ethers.getContractFactory('Nappy');
  const initialSupply = BigNumber.from(1000000000).mul(
    BigNumber.from(10).pow(9)
  );
  const nappy = await Nappy.deploy(initialSupply);

  await nappy.deployed();

  const ownerBalance = await nappy.balanceOf(owner.address);

  console.log('Nappy deployed to:', owner.address, ownerBalance);

  // For NappyTokenSale Deploy
  const NappyTokenSale = await hre.ethers.getContractFactory('NappyTokenSale');
  const nappyTokenSale = await NappyTokenSale.deploy(
    22666,
    nappy.address,
    owner.address
  );

  await nappyTokenSale.deployed();

  console.log('NappyTokenSale deployed to:', nappyTokenSale.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
