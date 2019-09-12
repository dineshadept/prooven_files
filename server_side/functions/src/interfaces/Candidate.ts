import {bucket} from "../config/firebaseConfig";

const crypto = require('crypto');
const Wallet = require('ethereumjs-wallet');
const bip39 = require('bip39');

export interface Candidate {
    userId: String,
    privateKey: String,
    publicKey: String,
    phrase: String,
    serverTs: Number,
    link: String,
    fileName: String,
    institution: String,
    registerNumber: String,
    name: String,
    specialization: String,
    degree: String,
    grade: String,
    class: String,
    authorisedSignatory: String,
    period: String,
    createdDate: String,
    email: String,
    password: String,
    phone: String
}

export const createCandidate = function(userId: String, inputObject: any): Candidate {
    const mnemonic = bip39.entropyToMnemonic(crypto.randomBytes(16)
        .toString('hex'));
    const wallet = Wallet.generate();
    const privateKey = wallet.getPrivateKeyString();
    const publicKey = wallet.getAddressString();
    const serverTs = new Date().getTime();
    const name = inputObject["Name"] ? inputObject["Name"] : "";
    const fileName = `${userId}_${name}_${serverTs}`;
    const link = `https://storage.googleapis.com/${bucket.name}/${fileName}`;

    let candidate: Candidate = {
        userId: userId,
        privateKey: privateKey,
        publicKey: publicKey,
        phrase: mnemonic,
        serverTs: serverTs,
        link: link,
        fileName: fileName,
        institution: inputObject["Institution"] ? inputObject["Institution"] : "",
        registerNumber: inputObject["Register Number"] ? inputObject["Register Number"] : "",
        name: name,
        specialization: inputObject["Specialization"] ? inputObject["Specialization"] : "",
        degree: inputObject["Degree"] ? inputObject["Degree"] : "",
        grade: inputObject["Grade"] ? inputObject["Grade"] : "",
        class: inputObject["Class"] ? inputObject["Class"] : "",
        authorisedSignatory: inputObject["Authorised Signatory"] ? inputObject["Authorised Signatory"] : "",
        period: inputObject["Period"] ? inputObject["Period"] : "",
        createdDate: inputObject["Created Date"] ? inputObject["Created Date"] : "",
        email: inputObject["Email"] ? inputObject["Email"] : "",
        password: inputObject["Password"] ? inputObject["Password"] : "",
        phone: inputObject["Phone"] ? inputObject["Phone"] : ""
    }

    return candidate;
}