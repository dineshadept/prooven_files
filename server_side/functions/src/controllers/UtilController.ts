import {ExpressConfig} from '../config/express';
const app = ExpressConfig.getInstance();

import {firebase} from "../config/firebaseConfig";
const candidatesDBRef = firebase.database().ref('candidates');

const getCountryData = () => {
    let countryJson: any = [];
    const allCountriesData: any = require('country-data').countries.all
    allCountriesData.forEach((data: any) => {
        countryJson.push({
            code: data.alpha2,
            dial_code: data.countryCallingCodes[0],
            name: data.name,
            emoji: data.emoji
        })
    })
    countryJson = countryJson.sort((a: any, b: any) => a.name.localeCompare(b.name));
    return countryJson;
}
const countriesData = getCountryData();

export const utilDefs = function(): void {


    app.get('/country', (req: any, res: any) => {
        res.header("Access-Control-Allow-Origin", "*");
        return res.json(countriesData);
    });


    app.post('/list_candidates', (req: any, res: any) => {
        res.header("Access-Control-Allow-Origin", "*");
        const userId = req.body.userid;

        candidatesDBRef.orderByChild("userId").equalTo(userId).on('value', async function (snapshot: any) {
            const candidatesList = snapshot.val();
            if (candidatesList == null)
                return res.json({});
            else
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