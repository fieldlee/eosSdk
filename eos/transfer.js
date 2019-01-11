'use strict'

var util = require('util');
var fs = require('fs');

var transfer = function (eos, logger) {
    // var from = "33fieldlee33";
    // var to = "ldp2fieldlee";
    var to = "33fieldlee33";
    var from = "ldp2fieldlee";
    var amount = 0.1559;
    var value = amount.toFixed(4) + " EOS";
    var memo = "pay token";

    eos.transfer(from, to, value, memo, (err, res)=>{console.log(err,res)})
    // eos.contract("eosio.token").then((token) => {
        // eos.transfer(from, to, value, memo).then((result) => {
        //     logger.info(result);     
        // }).catch((err) => {
        //     logger.error(err);
        // });
    // },(err)=>{
    //     logger.error(err);
    // });
};

exports.transfer = transfer;