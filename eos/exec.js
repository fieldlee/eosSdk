'use strict'

var util = require('util');
var fs = require('fs');

// - proposal_name：提案名
// - requested_permissions：提案审批通过需要的权限，这里需要user1和user2的owner权限
// - trx_permission：提案执行需要的权限，需要popo的owner权限就能发起转账
// - contract：提案调用的合约账户，转账使用eosio.token账户合约
// - action：提案调用的合约方法，转账使用transfer方法
// - data：具体数据
// - proposer：提案发起人，user1发起
// - proposal_expiration：提案的有效时间


var exec =   async function (eos, logger) {
    const msig = await eos.contract('eosio.msig')
    msig.exec({
        "proposer":'33fieldlee33', 
        "proposal_name":'paytoldp', 
        "executer":"33fieldlee33"
    },{
        authorization: `33fieldlee33@active`
    }).then((result)=>{
        logger.info("result:");
        logger.info(result);
    },(err) => {
        logger.error("err:");
        logger.error(err);
    });
};

exports.exec = exec;