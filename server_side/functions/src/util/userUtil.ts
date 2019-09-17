import {firebase} from "../config/firebaseConfig";
import {errMsgs} from "../config/Constants";

const usersDBRef = firebase.database().ref('users');

export class UserUtil {
    static isUserIdExists(userId: String, cb: any) {
        usersDBRef.orderByChild("userId").equalTo(userId).once('value').then(async function (snapshot: any) {
            if (await snapshot.exists()){
                cb(true);
            } else {
                console.log(`userId, ${userId} does not exist`);
                cb(false);
            }
        }, (err: any) => {
            console.log("Failed to check isUserExists", err);
            cb(false);
        });
    }

    static isUserExistsHttpRes(userId: String, res: any): any {
        UserUtil.isUserIdExists(userId, (isExists: boolean) => {
            if (!isExists){
                const errorJson = errMsgs.invalid_user;
                return res.status(errorJson.code).send(errorJson.message);
            }
        })
    }

    static getUserId(userId: String, cb: any) {
        usersDBRef.orderByChild("userId").equalTo(userId).once('value').then(async function (snapshot: any) {
            if (await snapshot.exists()){
                cb(snapshot.val());
            } else {
                console.log(`userId, ${userId} does not exist`);
                cb(null);
            }
        }, (err: any) => {
            console.log(`Failed to get user for userId, ${userId}`, err);
            cb(null);
        });
    }

    static updateUser(user: any, cb: any) {
        usersDBRef.update(user)
            .then(() => cb());
    }

    static isEmailExists(email: String, cb: any) {
        usersDBRef.orderByChild("email").equalTo(email).once('value').then(async (snapshot: any) => {
            if (await snapshot.exists()){
                cb(true);
            } else {
                console.log(`Email, ${email} does not exist`);
                cb(false);
            }
        }, (err: any) => {
            console.log("Failed to check isEmailExists", err);
            cb(false);
        });
    }
}