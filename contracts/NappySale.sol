// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.6.0;

import './Nappy.sol';
import './CrowdSale.sol';
// import "@openzeppelin-contracts/contracts/crowdsale/Crowdsale.sol";

contract MappyTokenSale is Crowdsale {
    constructor(
        uint256 rate, 
        address payable wallet, 
        // MappyTokenSale token
        IERC20 token
        ) 
        Crowdsale (rate, wallet, token)public {
    }

        // Token Supply
        uint256 preSaleQty = 30000000 * 10 ** 9;
        uint256 seedSaleQty = 50000000 * 10 ** 9;
        uint256 publicSaleQty = 20000000 * 10 ** 9;

        // Token Price 
        uint256 public preSalePrice = 22666;
        uint256 public seedSalePrice = 13600;
        uint256 public publicSalePrice = 3400;

   

    function _getTokenAmount(uint256 weiAmount) internal view override returns (uint256) {
        uint256 tokenRate;
        if(weiAmount <= preSaleQty) {
            tokenRate = preSalePrice;
        } else if (weiAmount <= seedSaleQty) {
            tokenRate = seedSalePrice;
        } else if (weiAmount <= publicSaleQty) {
            tokenRate = publicSalePrice;
        } else {
            revert('Not enough tokens left');
        }
        return (weiAmount.mul(tokenRate)).div(10**9);
    }

    function buyToken(uint256) public payable {
        buyTokens(msg.sender);
    }

     function _processPurchase() internal {
        uint256 stage;
        if(stage == preSaleQty) {
            preSaleQty--;
        }
        else if (stage == seedSaleQty) {
            seedSaleQty--;
        } else if (stage == publicSaleQty) {
            publicSaleQty--;
        } else {
            revert('Kya kar raha hai');
        }
    }

}
 