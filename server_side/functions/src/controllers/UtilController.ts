import {ExpressConfig} from '../config/express';
const app = ExpressConfig.getInstance();

import {firebase} from "../config/firebaseConfig";
const candidatesDBRef = firebase.database().ref('candidates');

export const utilDefs = function(): void {


    app.get('/country', (req: any, res: any) => {
        res.header("Access-Control-Allow-Origin", "*");

        const countryRef = firebase.database().ref("country");

        countryRef.once('value').then(async function (snapshot: any) {
            let countryList = snapshot.val();
            countryList = countryList.sort((a: any, b: any) => a.name.localeCompare(b.name));
            return res.json(countryList);
        });

    });


    app.post('/list_candidates', (req: any, res: any) => {
        res.header("Access-Control-Allow-Origin", "*");
        const userid = req.body.userid;

        candidatesDBRef.orderByChild("userid").equalTo(userid).on('value', async function (snapshot: any) {
            const candidatesList = snapshot.val();
            return res.json(candidatesList);
        });

    });


    app.get('/provider_type', (req: any, res: any) => {
        res.header("Access-Control-Allow-Origin", "*");

        const provider_typeRef = firebase.database().ref("provider_type");

        provider_typeRef.orderByValue().on('value', async function (snapshot: any) {
            const provider_typeList = snapshot.val();
            return res.json(provider_typeList);
        });

    });

}