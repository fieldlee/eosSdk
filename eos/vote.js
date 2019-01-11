'use strict'

var util = require('util');
var fs = require('fs');

var vote = function (eos, logger) {
    eos.contract("eosio").then((eosio) => {
        logger.info(eosio);
        eosio.voteproducer("xxxxxaccount", "", ["zbeosbp11111", "eoslaomaocom"].sort()).then((result) => {
            logger.info(result);
        }).catch((err) => {
            logger.error(err);
        });
    });
};

exports.vote = vote;



