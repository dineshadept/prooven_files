import {ExpressConfig} from '../config/express';
const app = ExpressConfig.getInstance();
import {firebase} from "../config/firebaseConfig";
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const Wallet = require('ethereumjs-wallet');
const bip39 = require('bip39');
const User = require("sequelize");
const saltRounds = 10;

const usersDBRef = firebase.database().ref('users');

export const authDefs = function() {


    app.post('/signup', function (req: any, res: any) {
        res.header("Access-Control-Allow-Origin", "*");

        const provider_name = req.body.provider_name;
        const provider_type = req.body.provider_type;
        const country = req.body.country;
        const name = req.body.name;
        const phone = req.body.phone;
        const email = req.body.email;
        const website = req.body.website;
        const about_business = req.body.about_business;
        const password = req.body.password;

        firebase.auth().createUserWithEmailAndPassword(email, password).then(function (data: any) {
            console.log("Created user", email, "in Firebase Auth");
            const userid = data.user.uid;
            //Here if you want you can sign in the user
            const randomBytes = crypto.randomBytes(16);
            const mnemonic = bip39.entropyToMnemonic(randomBytes.toString('hex'));
            //console.log(mnemonic);
            const wallet = Wallet.generate();
            const privateKey = wallet.getPrivateKeyString();
            const publicKey = wallet.getAddressString();

            bcrypt.hash(password, saltRounds, function (err: any, hash: any) {
                const newUser = usersDBRef.push();

                newUser.set({
                    provider_name: provider_name,
                    provider_type: provider_type,
                    country: country,
                    name: name,
                    phone: phone,
                    email: email,
                    userid: userid,
                    website: website,
                    about_business: about_business,
                    privateKey: privateKey,
                    publicKey: publicKey,
                    phrase: mnemonic,
                    password: hash
                }).then(() => {
                    console.log("Created user", email, "in Firebase Database");
                    res.status(200).json({
                        provider_name: provider_name,
                        provider_type: provider_type,
                        country: country,
                        name: name,
                        phone: phone,
                        email: email,
                        website: website,
                        about_business: about_business,
                        userid: userid
                    });
                });
            });
        }).catch(function (error: any) {
            // Handle Errors here.
            const errorCode = error.code;
            console.log(errorCode);
            const errorMessage = error.message;
            console.log(errorMessage);

            res.status(errorCode).json({"message": errorMessage});
        });


    });

    app.post('/signin', (req: any, res: any) => {
        res.header("Access-Control-Allow-Origin", "*");
        const email = req.body.email;
        const password = req.body.password;
        //let emailcount = 0;

        firebase.auth().signInWithEmailAndPassword(email, password).then((returnedUser: any) => {

            const userRef = firebase.database().ref("users");

            userRef.orderByChild("email").equalTo(email).on("child_added", async function (snapshot: any) {
                const userInfo = snapshot.val();
                return res.json(userInfo);

            });
        }).catch(function (error: any) {
            const errorCode = error.code;
            // return res.json({ "message": errorCode});
            res.status(errorCode).send("Login Failed: Please check your Email or password");
        });


    });

    app.get('/check_email', (req: any, res: any) => {
        res.header("Access-Control-Allow-Origin", "*");

        const email = req.body.email;
        let emailCount = 0;
        const check_emailRef = firebase.database().ref("users");
        // ref.orderByChild("height").equalTo(25).on("child_added", function(snapshot) {
        check_emailRef.orderByChild("email").equalTo(email).on("child_added", async function (snapshot: any) {
            emailCount = snapshot.numChildren();
        });

        if (emailCount === 0) {
            //   res.send({ "Status": 200,"message": "Successful" });
            res.sendStatus(200)
        } else {
            // res.send({ "Status": 403,"message": "UnSuccessful" });
            res.sendStatus(403)
        }

        //res.send({ count: 0 });
    });

    app.post('/check_forgot_email', (req: any, res: any) => {
        res.header("Access-Control-Allow-Origin", "*");

        const email = req.body.email;
        console.log(email);
        let emailCount = 0;
        const check_emailRef = firebase.database().ref("users");
        // ref.orderByChild("height").equalTo(25).on("child_added", function(snapshot) {
        check_emailRef.orderByChild("email").equalTo(email).on("child_added", async function (snapshot: any) {
            emailCount = snapshot.numChildren();
            console.log("COUNT" + emailCount);
            if (emailCount === 0) {

                res.send({"Status": 200, "message": "Not found"});
                // res.sendStatus(403)
            } else {


                firebase.auth().sendPasswordResetEmail(email).then(function () {
                    res.send('Email sent');
                }).catch(function (error: any) {
                    // An error happened.
                    console.log(error);
                });

            }
        });

    });

    app.post('/send_email', (req: any, res: any) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.send("mailsent");
    });

    app.post('/reset_password', (req: any, res: any) => {
        res.header("Access-Control-Allow-Origin", "*");

        const token = req.body.token;
        //const password = req.body.password;
        console.log(token);
        let tokenCount = 0;
        const tokenRef = firebase.database().ref("password_tokens");

        // ref.orderByChild("height").equalTo(25).on("child_added", function(snapshot) {
        tokenRef.orderByChild("reset_token").equalTo(token).on("child_added", async function (snapshot: any) {

            tokenCount = snapshot.numChildren();
            console.log(tokenCount);
            const emailVal = snapshot.val();
            const emailId = emailVal.email;

            if (tokenCount === 0) {
                // res.send({ "Status": 200,"message": "Not found" });
                res.sendStatus(401);
            } else {
                User.findone({
                    where: {
                        username: emailId
                    }
                }).then({});
            }

        });

    });

}