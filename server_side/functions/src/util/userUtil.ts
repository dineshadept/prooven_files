import {firebase} from "../config/firebaseConfig";
import {errMsgs} from "../config/Constants";

const usersDBRef = firebase.database().ref('users');

export class UserUtil {
    static isUserIdExists(userId: String, cb: any) {
        usersDBRef.orderByChild("userid").equalTo(userId).on('value', async function (snapshot: any) {
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
}