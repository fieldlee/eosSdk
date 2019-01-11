'use strict'

var util = require('util');
var fs = require('fs');

var buyram = function (eos, logger) {
    var payaccount = "33fieldlee33";
    var receiveraccount = "33fieldlee33";
    var bytes = 4 * 1024;

    eos.transaction(tr => {
        tr.buyrambytes({
            payer: payaccount,
            receiver: receiveraccount,
            bytes: bytes
        })
    }).then((result) => {
        logger.info(result);
    }).catch((err) => {
        logger.error(err);
    });
};

exports.buyram = buyram;