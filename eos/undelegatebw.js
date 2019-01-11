
'use strict'

var util = require('util');
var fs = require('fs');

var undelegatebw = function (eos, logger) {
    var payaccount = "33fieldlee33";
    var receiver = "ldp2fieldlee";
    var unstakeCPU = 0.0;
    var unstakeNET = 0.5;

    // eos.contract('eosio').then(eosio => {
    //     eosio.undelegatebw(payaccount, receiver, unstakeNET.toFixed(4) + ' EOS', unstakeCPU.toFixed(4) + ' EOS').then((result) => {
    //         logger.info(result);
    //     }).catch((err) => {
    //         logger.error(err);
    //     });
    // });


    eos.transaction(tr => {
        tr.undelegatebw({
            from: payaccount,
            receiver: receiver,
            unstake_net_quantity: unstakeNET.toFixed(4) + ' EOS',
            unstake_cpu_quantity: unstakeCPU.toFixed(4) + ' EOS'
        })
    }).then((result) => {
        logger.info(result);
    }).catch((err) => {
        logger.error(err);
    });
};

exports.undelegatebw = undelegatebw;