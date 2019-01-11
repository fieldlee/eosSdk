

'use strict'

var util = require('util');
var fs = require('fs');

var getKeyAccounts = function (eos, logger) {
    
    var public_key = "EOS5V9p2GerDSELFRCR75UJ6fynQDuR72sxboc5LNTAUJjTXBMgkf";
    eos.getKeyAccounts(public_key).then(function (value) {
        logger.info(value);
    }).catch(function (err) {
        logger.error(err);
    });

    eos.getCurrencyStats('eosio.token', 'EOS')
    .then(result => console.log(result))
    .catch(error => console.error(error));
};
exports.getKeyAccounts = getKeyAccounts;