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

        uint256 currentStage;
        uint256 deno = 10 ** 6;

        // Token Price 
        uint256 public preSalePrice = 22666;
        uint256 public seedSalePrice = 13600;
        uint256 public publicSalePrice = 3400;

   

    function calculateRate() internal view returns(uint256){
        if (currentStage == 0) {
            return preSalePrice;
        } 
        else if (currentStage == 1) {
            return seedSalePrice;
        } 
        else if (currentStage == 2) {
            return publicSalePrice;
        } 
    } 

    function _getTokenAmount(uint256 weiAmount) internal override view returns (uint256) {
        return (weiAmount.mul(calculateRate())).div(deno);
    }

    function _processPurchase(address , uint256 tokenAmount) internal override {
        if (currentStage == 0) {
            preSaleQty = preSaleQty.sub(tokenAmount);

                if (preSaleQty == 0 ) {
                    currentStage = 1;
                }
        } 
        else if (currentStage == 1) {
            seedSaleQty = seedSaleQty.sub(tokenAmount);

                if (seedSaleQty == 0 ) {
                currentStage = 2;
                }

        }
         else if (currentStage == 2) {
            publicSaleQty = publicSaleQty.sub(tokenAmount);
        } 
         
    }

}
 