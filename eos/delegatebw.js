'use strict'

var util = require('util');
var fs = require('fs');

var delegatebw = function (eos, logger) {
    var payaccount = "33fieldlee33";
    var receiver = "ldp2fieldlee";
    var stakeNET = 0.1;
    var stakeCPU = 0.5;

    eos.transaction(tr => {
        tr.delegatebw({
            from: payaccount,
            receiver: receiver,
            stake_net_quantity: stakeNET.toFixed(4) + ' EOS',
            stake_cpu_quantity: stakeCPU.toFixed(4) + ' EOS',
            transfer: 0
        })
    }).then((result) => {
        logger.info(result);
    }).catch((err) => {
        logger.error(err);
    });
};

exports.delegatebw = delegatebw;