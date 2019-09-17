const crypto = require('crypto');
const Wallet = require('ethereumjs-wallet');
const bip39 = require('bip39');
const bCrypt = require('bcrypt');
const saltRounds = 10;
const cryptoRandomString = require('crypto-random-string');

export interface User {
    userId: String,
    provider_name: String,
    provider_type: String,
    country: String,
    name: String,
    phone: String,
    email: String,
    website: String,
    about_business: String,
    privateKey: String,
    publicKey: String,
    phrase: String,
    password: String,
    isEmailVerified: boolean,
    emailVerificationToken: String,
    emailVerificationTokenCreatedTs: number
}

export const createUser = function(userId: String, req: any, userCb: any) {
    const wallet = Wallet.generate();
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const country = req.body.country;
    const provider_name = req.body.provider_name;
    const provider_type = req.body.provider_type;
    const about_business = req.body.about_business;
    const website = req.body.website;
    const privateKey = wallet.getPrivateKeyString();
    const publicKey = wallet.getAddressString();
    const mnemonic = bip39.entropyToMnemonic(crypto.randomBytes(16)
        .toString('hex'));
    const password = req.body.password;
    const emailVerificationTokenCreatedTs = new Date().getTime();
    const emailVerificationToken = cryptoRandomString({length: 20, type: 'url-safe'});

    bCrypt.hash(password, saltRounds, function (err: any, passwordHash: any) {
        const user: User = {
            userId: userId,
            name: name,
            email: email,
            phone: phone,
            country: country,
            provider_name: provider_name,
            provider_type: provider_type,
            about_business: about_business,
            website: website,
            privateKey: privateKey,
            publicKey: publicKey,
            phrase: mnemonic,
            password: passwordHash,
            isEmailVerified: false,
            emailVerificationToken: emailVerificationToken,
            emailVerificationTokenCreatedTs: emailVerificationTokenCreatedTs
        }
        userCb(user);
    });
}