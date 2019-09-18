import {ExpressConfig} from '../config/express';
const app = ExpressConfig.getInstance();
import {firebase} from "../config/firebaseConfig";
import {errMsgs, successMsgs} from "../config/Constants";
import {GenericUtil} from "../util/genericUtil";
import {EmailUtil} from "../util/emailUtil";
import {UserUtil} from "../util/userUtil";
import {createUser} from "../interfaces/User";
const User = require("sequelize");

const usersDBRef = firebase.database().ref('users');

export const authDefs = function() {

    app.post('/signup', function (req: any, res: any) {
        res.header("Access-Control-Allow-Origin", "*");
        const email = req.body.email;
        const password = req.body.password;

        UserUtil.isEmailExists(email, (isExists: boolean) => {
            if (isExists) {
                const resJson = errMsgs.signup_duplicate;
                res.status(resJson.code).send(resJson.message);
            } else {
                firebase.auth().createUserWithEmailAndPassword(email, password).then(function (data: any) {
                    console.log("Created user", email, "in Firebase Auth");
                    const userId = data.user.uid;

                    createUser(userId, req, (user: any) => {
                        const verifyLink = `${GenericUtil.getDomainReqUrl(req)}/api/signup/verify/${user.userId}/${user.emailVerificationToken}`;
                        const newUser = usersDBRef.push();
                        newUser.set(user).then(() => {
                            EmailUtil.sendEmail("Welcome to Prooven",
                                [email],
                                [], [],
                                `Please click the following link to verify your email - ${verifyLink}`,
                                () => {
                                    const resJson = successMsgs.signup_success;
                                    console.log("Created user", email, "in Firebase Database");
                                    res.status(resJson.code).send(resJson.message);
                                }
                            )
                        });
                    })
                }).catch(function (error: any) {
                    // Handle Errors here.
                    console.log(error.code);
                    const errorMessage = error.message;
                    console.log(errorMessage);

                    res.status(error.code).send(errorMessage);
                });
            }

        })
    });

    app.post('/signin', (req: any, res: any) => {
        res.header("Access-Control-Allow-Origin", "*");
        const email = req.body.email;
        const password = req.body.password;

        firebase.auth().signInWithEmailAndPassword(email, password).then((returnedUser: any) => {

            usersDBRef.orderByChild("email")
                .equalTo(email)
                .once("value").then(async (snapshot: any) => {
                    const userInfo = snapshot.val();
                    const userIdKey = Object.keys(userInfo)[0];
                    if (userInfo[userIdKey].isEmailVerified === true) {
                        return res.json(userInfo[userIdKey]);
                    }
                    else {
                        const resJson = errMsgs.login_failure_verification_incomplete;
                        return res.status(resJson.code).send(resJson.message);
                    }
            });
        }).catch(function (error: any) {
            console.log("Login error", error);
            const errorJson = errMsgs.login_failure_invalid_credentials;
            res.status(errorJson.code).send(errorJson.message);
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

    app.get('/signup/verify/:userId/:token', (req: any, res: any) => {
        const userId: String = req.params.userId;
        const token: String = req.params.token;
        UserUtil.getUserId(userId, (user: any) => {
            const userIdKey = Object.keys(user)[0];
            let resJson: any;
            if(user === null) {
                resJson = errMsgs.email_verify_token_mismatch;
            } else {
                if(user[userIdKey].emailVerificationToken === token) {
                    user[userIdKey].isEmailVerified = true;
                    user[userIdKey].emailVerificationToken = "";
                    user[userIdKey].emailVerificationTokenCreatedTs = 0;
                    resJson = successMsgs.email_verify_success;
                } else {
                    resJson = errMsgs.email_verify_token_mismatch;
                }
            }

            if(resJson.code === 200) {
                UserUtil.updateUser(user, () => {
                    res.status(resJson.code).send(resJson.message);
                })
            }
        });
    });
}