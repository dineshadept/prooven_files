// const Wallet = require('ethereumjs-wallet');
// const bip39 = require('bip39');
// const crypto = require('crypto');
//
// class User {
//     private provider_name: String;
//     private provider_type: String;
//     private country: String;
//     private name: String;
//     private phone: String;
//     private email: String;
//     private userid: String;
//     private website: String;
//     private about_business: String;
//     private privateKey: String;
//     private publicKey: String;
//     private phrase: String;
//     private password: String;
//
//
//     constructor(provider_name: String, provider_type: String, country: String, name: String, phone: String, email: String, userid: String, website: String, about_business: String, privateKey: String, publicKey: String, phrase: String, password: String) {
//         this.provider_name = provider_name;
//         this.provider_type = provider_type;
//         this.country = country;
//         this.name = name;
//         this.phone = phone;
//         this.email = email;
//         this.userid = userid;
//         this.website = website;
//         this.about_business = about_business;
//         this.password = password;
//
//         const wallet = Wallet.generate();
//         this.privateKey = wallet.getPrivateKeyString();
//         this.publicKey = wallet.getAddressString();
//         this.phrase = bip39.entropyToMnemonic(crypto.randomBytes(16).toString('hex'));
//     }
// }