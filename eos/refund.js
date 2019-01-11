//解除账号 抵押的三天后收回
'use strict'

var util = require('util');
var fs = require('fs');


var account = "";
var refund = function (eos, logger) {
    eos.contract('eosio').then(eosio => {
        eosio.refund(account).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
    })
}
exports.refund = refund;