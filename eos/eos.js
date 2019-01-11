
'use strict'

var util = require('util');
var fs = require('fs');

var getEos = function(eos,logger) {
    var account = "33fieldlee33";
    eos.getAccount(account).then((result) => {
        logger.info(result);    
    }).catch((err) => {
        logger.error(err);
    });

    account = "33fieldlee33"
    // eos.getTableRows(true, "contract name",  , "table name")
    eos.getTableRows(true, "33fieldlee33", account, "profiles").then((result) => {
        logger.info(result);
    }).catch((err) => {
        logger.error(err);
    });
};


var createAccount = function(eos,logger){
    var creator = "33fieldlee33";
    var name = "alexhu33alex";
    var owner = "EOS5V9p2GerDSELFRCR75UJ6fynQDuR72sxboc5LNTAUJjTXBMgkf";
    var active = "EOS4xBZcpaf2ZT43mBuuBimCAawNKQTtgyFRp8LK8ysArfR3JHoPe";
    var bytes = 2 * 1024;
    var stakeNET = 0.01;
    var stakeCPU = 0.01;
    
    eos.transaction(tr => {
        tr.newaccount({
            creator: creator,
            name: name,
            owner: owner,
            active: active
          });
    
        tr.buyrambytes({
          payer: creator,
          receiver: name,
          bytes: bytes
        })
        
        tr.delegatebw({
          from: creator,
          receiver: name,
          stake_net_quantity: stakeNET.toFixed(4) + ' EOS',
          stake_cpu_quantity: stakeCPU.toFixed(4) + ' EOS',
          transfer: 0
        });

      }).then((result) => {
          logger.info(result);
      }).catch((err) => {
          logger.error(err);
      });
};

exports.createAccount = createAccount;
exports.getEos = getEos;