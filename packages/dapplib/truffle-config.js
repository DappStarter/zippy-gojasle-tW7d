require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney entire bright venture stool response praise common hockey civil army gentle'; 
let testAccounts = [
"0x7e69a80a5e4f4780a8ff9038faecd7f2d88299c6c283dbff17b8b1b739171460",
"0x898c6a614e2d008352f106a62c03eaa44b3a7d4c5590e5eea9fcc9314f2c5ed8",
"0x97163b5263ebab4e6b5a36bb6be81f7ab4f97583d31c0f24c827aee36895f74b",
"0xbd64d98298f9d4e6a4798722b7003f5f9f447b405942ed0295e9e9581a62c3e4",
"0xcd22df6566e4ca63d94484bde5424351d6d21667dc54d601a7a1d87f95fe3b2a",
"0x53803b1654802ff8a7373eec22cce076db2d9101e49594db040b61dfe444e58d",
"0xddcef77c49c78654079f20ad7784f5273a11024b00dfca37ab585e37e52ce651",
"0xdabe49d45cd60970f6cf2e1d077ef28ca118ee559ca675f2a3ac6e3cd2691598",
"0x0ef267aed50117155c864923c6d61cc1cd7c2fb60020bf5218e1097c083e7cd9",
"0x509b759497423d4bc8dd59a7a177a50f6797980352735058402bc940499d0829"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


