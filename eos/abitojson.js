'use strict'

var util = require('util');
var fs = require('fs');


var request = require("request");
var rpc = require("../rpc.json");

var url = util.format("%s/v1/chain/abi_json_to_bin",rpc[0]);

var options = { method: 'POST',url: url };
var signoption = {
	authorization:"33fieldlee@active",
	broadcast:true,
	sign:true
};
var abi = function (eos, logger) {
    eos.abiJsonToBin({
        "code": "eosio.token",
        "action": "transfer",
        "args": {
            "from": "33fieldlee33",
            "to": "ldp2fieldlee",
            "quantity": "0.5000 EOS",
            "memo": "multisign transfer"
        }
    }).then( (result)=> {
        logger.info(result);
        eos.abiBinToJson({
            code: 'eosio.token',
            action: 'transfer',
            binargs: result.binargs
        }).then(function (value) {
            logger.info(value);
        }).catch(function (reason) {
            console.log(reason);
        });
    },(err)=>{
        logger.err("err2:");
        logger.err(err);
    })
};

exports.abi = abi;