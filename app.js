// log4js
let log4js = require('log4js');
let logger = log4js.getLogger('eosSDK');

// express
let express = require('express');
let bodyParser = require('body-parser');
let http = require('http');
let util = require('util');
let fs = require('fs');
let cors = require('cors');
let path = require('path');
let app = express();
let eosClient = require('eosjs');
var keys = require("./keys.json");
var rpc = require("./rpc.json");


// eos modules
let getEos = require('./eos/eos');
let abi = require('./eos/abitojson');
let history = require('./eos/history');
let get = require('./eos/get');
let buyram = require('./eos/buyram');
let delegatebw = require('./eos/delegatebw');
let sellram = require('./eos/sellram');
let undelegatebw = require('./eos/undelegatebw');
let transfer = require('./eos/transfer');
let contract = require('./eos/callContract');
let getAccount = require('./eos/getAccountsByKey');
let vote = require('./eos/vote');
let permission = require('./eos/updatepermission');
let multisign = require('./eos/multisign');
let reviewmultisign = require('./eos/reviewmultiSig');
let exec = require('./eos/exec');
let cancel = require('./eos/cancel');

let host = process.env.HOST || "127.0.0.1";
let port = process.env.PORT || "4000";

app.options('*', cors());
app.use(cors());
//support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({
    extended: false
}));

var EOS = eosClient({
    chainId: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
    keyProvider: keys,
    httpEndpoint: rpc[0],
    expireInSeconds: 60,
    broadcast: true,
    verbose: false,
    sign: true
});

///////////////////////////////////////////////////////////////////////////////
//////////////////////////////// START SERVER /////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
var server = http.createServer(app).listen(port, function () { });

logger.info('****************** SERVER STARTED ************************');
logger.info('**************  http://' + host + ':' + port + '  ******************');
server.timeout = 240000;

app.post('/eos', function (req, res) {
    getEos.getEos(EOS, logger);
    res.status(200).json({ info: 'getting...' });
    return;
});

app.post('/createAccount', function (req, res) {
    getEos.createAccount(EOS, logger);
    res.status(200).json({ info: 'createAccount...' });
    return;
});

app.post('/abi', function (req, res) {
    abi.abi(EOS, logger);
    res.status(200).json({ info: 'abitojson...' });
    return;
});

app.post('/history', function (req, res) {
    history.getHistory(EOS, logger);
    res.status(200).json({ info: 'getHistory...' });
    return;
});

app.post('/get', function (req, res) {
    get.get(EOS, logger);
    res.status(200).json({ info: 'getting...' });
    return;
});

app.post('/buyram', function (req, res) {
    buyram.buyram(EOS, logger);
    res.status(200).json({ info: 'buying...' });
    return;
});

app.post('/delegatebw',function (req, res) {
    delegatebw.delegatebw(EOS, logger);
    res.status(200).json({ info: 'delegatebw...' });
    return;
});

app.post('/sellram',function (req, res) {
    sellram.sellram(EOS, logger);
    res.status(200).json({ info: 'sellram...' });
    return;
});

app.post('/undelegatebw',function (req, res) {
    undelegatebw.undelegatebw(EOS, logger);
    res.status(200).json({ info: 'undelegatebw...' });
    return;
});

app.post('/transfer',function (req, res) {
    transfer.transfer(EOS, logger);
    res.status(200).json({ info: 'transfer...' });
    return;
});

app.post('/create',function (req, res) {
    contract.create(EOS, logger);
    res.status(200).json({ info: 'create...' });
    return;
});

app.post('/update',function (req, res) {
    contract.update(EOS, logger);
    res.status(200).json({ info: 'update...' });
    return;
});

app.post('/getaccount',function (req, res) {
    getAccount.getKeyAccounts(EOS, logger);
    // contract.call(EOS, logger);
    res.status(200).json({ info: 'getaccount...' });
    return;
});


app.post('/getcontract',function (req, res) {
    get.getContractTable(EOS, logger);
    // getAccount.getKeyAccounts(EOS, logger);
    // contract.call(EOS, logger);
    res.status(200).json({ info: 'get contract...' });
    return;
});


app.post('/vote',function (req, res) {
    vote.vote(EOS, logger);

    res.status(200).json({ info: 'vote...' });
    return;
});


app.post('/permission',function(req, res) {
    permission.updateauth(EOS, logger);
    res.status(200).json({ info: 'permission...' });
    return;
});

app.post('/multisign',function(req, res) {
    multisign.multisign(EOS, logger);
    res.status(200).json({ info: 'multisign...' });
    return;
});

app.post('/reviewsig',function(req, res) {
    reviewmultisign.reviewmultisign(EOS, logger);
    // multisign.multisign(EOS, logger);
    res.status(200).json({ info: 'reviewmultisign...' });
    return;
});

app.post('/exec',function(req, res) {
    exec.exec(EOS, logger);
    // reviewmultisign.reviewmultisign(EOS, logger);
    // multisign.multisign(EOS, logger);
    res.status(200).json({ info: 'exec...' });
    return;
});

app.post('/cancel',function(req, res) {
    cancel.cancel(EOS, logger);
    res.status(200).json({ info: 'cancel...' });
    return;
});

app.post('/gettable',function(req, res) {
    get.getContractTable(EOS, logger);
    res.status(200).json({ info: 'talbe...' });
    return;
});