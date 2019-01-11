
'use strict'

var util = require('util');
var fs = require('fs');

var get = function(eos,logger) {

    eos.getInfo({}).then((result) => {
        logger.info(result);    
    }).catch((err) => {
        logger.error(err);
    });

    var account = "33fieldlee33";
    eos.getAccount(account).then((result) => {
        logger.info(account);    
        logger.info(JSON.stringify(result));    
    }).catch((err) => {
        logger.error(err);
    });

    // get balance
    account = "33fieldlee33";
    eos.getCurrencyBalance({
        code: 'eosio.token',
        account: account,
        symbol: 'EOS'
    }).then((result) => {
        logger.info(util.format('====getCurrencyBalance:"%s"', JSON.stringify(result)));    
    }).catch((err) => {
        logger.error(util.format('====getCurrencyBalance Error:"%s"', err));
    });


    // var tx_id = "e06407c67f2e852a4653a8d647fb3b5ed50e0db45a73339e82fab8d1395624b6";
    // eos.getTransaction(tx_id).then((result) => {
    //     logger.info(JSON.stringify(result));    
    // }).catch((err) => {
    //     logger.error(err);
    // });
};

var EOS_CONFIG = {
    talbeName :"approvals",
    contractName: "eosio.msig", // Contract name
    contractSender: "33fieldlee33"  //// User executing the contract (should be paired with private key)
};
var getContractTable = function(eos,logger) {
    eos.getTableRows(true, EOS_CONFIG.contractName, EOS_CONFIG.contractSender, EOS_CONFIG.talbeName).then((result) => {
        logger.info(result);
    }).catch((err) => {
        logger.error(err);
    });
};

exports.get = get;
exports.getContractTable = getContractTable;