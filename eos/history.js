'use strict'

var util = require('util');
var fs = require('fs');

var getHistory = function (eos, logger) {
    eos.getActions({
        account_name: '33fieldlee33'
    }).then( a=>console.log(JSON.stringify(a,null,2)) );
};
exports.getHistory = getHistory;