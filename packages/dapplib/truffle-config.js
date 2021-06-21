require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid process orient venture stove razor often million grace glimpse equal gesture'; 
let testAccounts = [
"0x014fa7cbe53e4c31e13af6291f9dfcb324d51e9362c95bc9930fc7c24e3ed84f",
"0xa81d211c5d86f3368e46dc0a502be7496fca488c134ab167bc3b698e544669bb",
"0xe55712b946b08a1c61cce0435139eb9f7ff54834f996b862b5545bd88d450bae",
"0x55d11ad39771d78e3a65dde0c9c2363392cb63de28235977080151117a72e392",
"0xd25cfaa17aa753c97923e3e2b19afbbe6a305a50e1dc66fcf0487925ea6cad98",
"0x935960ba33305dc4541e2204907fc7e3bcaafe1fc3bcf25ce317a9e2444e2231",
"0x3def952c62e7adb3afd103ad85fc6a98f21a028762749613aebb12c745bc805f",
"0x62b397f03f42fc6b7e72b9fb499264e59734df5ccb4e523483d4e270f8601d65",
"0xf7e9c13cafea7942c2b39f37d1dc5a351776c68482f830aec45964193b7c20ae",
"0x9bae029c943330fa6fe650e5a80be1c763a06061119b95ad7ea99310f7e842db"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

