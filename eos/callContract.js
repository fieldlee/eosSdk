'use strict'

var util = require('util');
var fs = require('fs');


var update = function (eos, logger) {
    var EOS_CONFIG = {
        contractName: "lidepeng", // Contract name
        contractSender: "lidepeng"  //// User executing the contract (should be paired with private key)
    };
    eos.contract(EOS_CONFIG.contractName).then((contract) => {
        // logger.info(contract);
        // 合约 调用方法
        contract.update(
            EOS_CONFIG.contractSender,
          "teenager",
          "25",
          { authorization : [EOS_CONFIG.contractSender] }
        ).then((res) => {  
            logger.info(res);
        }).catch((err) => {  
            logger.error(err);
        });
    });
};

var create = function (eos, logger) {
    var EOS_CONFIG = {
        contractName: "lidepeng", // Contract name
        contractSender: "teenager"  //// User executing the contract (should be paired with private key)
    };
    eos.contract(EOS_CONFIG.contractName).then((contract) => {
        // logger.info(contract);
        // 合约 调用方法
        contract.create(
          EOS_CONFIG.contractSender,
          "teenager_test",
          "25",
          { authorization : [EOS_CONFIG.contractSender] }
        ).then((res) => {  
            logger.info(res);
        }).catch((err) => {  
            logger.error(err);
        });
    });
};

exports.update = update;
exports.create = create;