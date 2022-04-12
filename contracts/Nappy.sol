// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.6.0;

import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Nappy is ERC20 {

    constructor(uint256 initialSupply) ERC20("Nappy", "NPY") public {
        _mint(msg.sender, initialSupply);
    }

    function decimals() public view virtual override returns (uint8) {
        return 9;
    }
 
}

