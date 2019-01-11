'use strict'

var util = require('util');
var fs = require('fs');

var deploy = function (eos, logger) {
    var account = "eosio";
    wasm = fs.readFileSync('docker/contracts/eosio.token/eosio.token.wasm');
    abi = fs.readFileSync('docker/contracts/eosio.token/eosio.token.abi');

    // Publish contract to the blockchain
    eos.setcode(account, 0, 0, wasm).then((result) => {
        logger.info(result);    
    }).catch((err) => {
        logger.error(err);
    }); // @returns {Promise}
    
    eos.setabi(account, JSON.parse(abi)).then((result) => {
        logger.info(result);    
    }).catch((err) => {
        logger.error(err);
    }); // @returns {Promise}
};

modules.deploy = deploy;