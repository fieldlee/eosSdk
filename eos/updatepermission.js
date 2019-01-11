'use strict'

var util = require('util');
var fs = require('fs');

var updateauth = async function (eos, logger) {

    // // 替换 xxxxxaccount yyyyyaccount 为你的账号
    const user = {
        'account1': 'ldp2fieldlee',
        'account2': '33fieldlee33'
    };

    async function getNewPermissions(accountName) {
        const account = await eos.getAccount(accountName);
        const perms = JSON.parse(JSON.stringify(account.permissions));
        return perms;
    }

    async function updateauth() {
        // 复制 源 账号的所有权限
        const perms = await getNewPermissions(user.account1);
        // console.log(perms);
        logger.info(util.format("perms => %s",JSON.stringify(perms)));
    //     {"permission":
    //     {"actor":"ldp2fieldlee","permission":"active"},
    //      "weight":1
    //      }
        const updateAuthResult = await eos.transaction(tr => {
            tr.updateauth({
                account: user.account1,
                permission: "owner",
                parent: "",
                auth: {
                    "threshold":1,
                    "keys":[
                        {
                            "key":"EOS6njmTsZDEiW9dNfKBipxLYUvhZaHUGvY4Uw9KVSgr67YRTFbPU",
                            "weight":1
                        }
                    ],
                    "accounts":[],
                    "waits":[]
                }
            }, {
                authorization: `${user.account1}@owner`
            });
        });
        logger.info(util.format("Success => %s",JSON.stringify(updateAuthResult)));
    }
    await updateauth();
};

exports.updateauth = updateauth;