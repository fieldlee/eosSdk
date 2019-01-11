'use strict'

var util = require('util');
var fs = require('fs');

var sellram = function (eos, logger) {
    // var account = "ldp2fieldlee";
    // var bytes = 4 * 1024;
    // eos.contract('eosio.system').then(eosio => {
    //     logger.info(eosio);
    //     eosio.sellram(account, bytes).then((result) => {
    //         logger.info(result);
    //     }).catch((err) => {
    //         logger.error(err);
    //     });
    // });

    var account = "ldp2fieldlee";
    // var receiveraccount = "33fieldlee33";
    var bytes = 1 * 1024;

    eos.transaction(tr => {
        tr.sellram({
            account: account,
            bytes: bytes
        })
    }).then((result) => {
        logger.info(result);
    }).catch((err) => {
        logger.error(err);
    });
};

exports.sellram = sellram;