import {ExpressConfig} from '../config/express';
const app = ExpressConfig.getInstance();

const crypto = require('crypto');
const Wallet = require('ethereumjs-wallet');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

export const notUsedDefs = function() {

    app.post('/ethereum', (req: any, res: any) => {
        res.header("Access-Control-Allow-Origin", "*");

        const randomBytes = crypto.randomBytes(16);
        const mnemonic = bip39.entropyToMnemonic(randomBytes.toString('hex'));

        console.log(mnemonic);

        const wallet = Wallet.generate();
        console.log("privateKey: " + wallet.getPrivateKeyString());
        console.log("address: " + wallet.getAddressString());
    });

    app.post('/keygeneration', (req: any, res: any) => {
        res.header("Access-Control-Allow-Origin", "*");

        // your 12 word phrase
        const randomBytes = crypto.randomBytes(16);
        const mnemonic = bip39.entropyToMnemonic(randomBytes.toString('hex'));
        console.log(mnemonic);

        const seed = bip39.mnemonicToSeedSync(mnemonic);
        // <Buffer 85 19 18 81 cf 0e cc f7 9c 5d 61 ......

        const bitcoinNetwork = bitcoin.networks.bitcoin;

        const hdMaster = bitcoin.bip32.fromSeed(seed, bitcoinNetwork); // seed from above

        const key1 = hdMaster.derivePath("m/44'/0'/0'/0/0");
        const key2 = hdMaster.derivePath("m/44'/0'/0'/0/1");

        console.log("privateKey : " + key1.toWIF());
        console.log("publicKey : " + key2.toWIF());
        //console.log(key2.keyPair.toWIF());

    });
}