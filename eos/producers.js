//解除账号 抵押的三天后收回
'use strict'

var util = require('util');
var fs = require('fs');


var account = "";
var producers = function (eos, logger) {
    eosInstance.getTableRows({
        json: true,
        code: 'eosio',
        scope: 'eosio',
        table: 'producers',
        table_key: '',
        limit: 200
    }).then((result)=>{
        logger.info(result);
    },(err)=>{
        logger.error(err);
    });
}

exports.producers = producers;
