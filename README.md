# Crowd-Sale-Smart-Contract

Crowd-Sale Smart Contract which three sale round.

- Presale Round
- Seedsale Round
- Publicsale Round

## Important Step

```bash
create .env file in root directory.
```

```bash
    API_URL = "https://eth-ropsten.alchemyapi.io/v2/your-api-key"
    PRIVATE_KEY = "your-metamask-private-key"
```

-Get Your API Key

- [Alchemy](https://alchemy.com/?r=36af7883c4699196)
  -Get Your Ropsten Faucet

- [Ropsten Faucet](https://github.com/matiassingers/awesome-readme)

## NPM Packages

- [Openzeppelin](https://www.npmjs.com/package/@openzeppelin/contracts)
- [Hardhat-Ethers](https://www.npmjs.com/package/hardhat-ethers)
- [Chai](https://www.npmjs.com/package/chai)
- [Ethers](https://www.npmjs.com/package/ethers)
- [Ethereum-Waffle](https://www.npmjs.com/package/ethereum-waffle)
- [Dotenv](https://www.npmjs.com/package/dotenv)

## Tech Stack

- [Node](https://nodejs.org/en/)
- [Hardhat](https://hardhat.org/)
- [Solidity](https://docs.soliditylang.org/)
- [Openzeppelin](https://openzeppelin.com/)

## Run Locally

Clone the project

```bash
  git clone https://github.com/karangorania/crowd-sale/tree/development
```

Go to the project directory

```bash
  cd crowd-sale
```

Install dependencies

```bash
  npm install
```

Compile

```bash
  npx hardhat compile
```

Test

```bash
  npx hardhat test
```

Deploy

```bash
  node scripts/deploy.js
```

Deploy on Ropsten

```bash
  npx hardhat run scripts/deploy.js --network ropsten
```

Help

```bash
  npx hardhat help
```

## Check on Ropsten Explorer

- [Ropsten Explorer](https://ropsten.etherscan.io/address/0xE0B2A968Fc566bce543E9da6D3893FfE1170B833)
