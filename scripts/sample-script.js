const hre = require('hardhat');

async function main() {
  const Nappy = await hre.ethers.getContractFactory('Greeter');
  const nappy = await Nappy.deploy(Nappy, 1000000000 * 10 ** 9);

  await nappy.deployed();

  console.log('Nappy deployed to:', nappy.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
