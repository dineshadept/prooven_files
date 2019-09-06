import {bucket, firebase} from "../config/firebaseConfig";
import {ExpressConfig} from '../config/express';
const app = ExpressConfig.getInstance();

const crypto = require('crypto');
const Wallet = require('ethereumjs-wallet');
const bip39 = require('bip39');

const XLSX = require('xlsx');
const PDFDocument = require('pdfkit');

const candidatesDBRef = firebase.database().ref('candidates');


export const transcriptsDefs = function () {
    app.post('/read_upload',  (req:any, res:any) => {

        const file =req.files[0];


        if (file) {

            const newFileName = `${file.originalname}_${Date.now()}`;
            const blob = bucket.file(newFileName);
            const blobStream = blob.createWriteStream({
                metadata: {
                    contentType: file.mimetype
                }
            });

            blobStream.on('finish', () => {
                const userId = req.body.userid;
                processUploadedTypescript(file, userId, () => {
                    console.log("Final Callback called...")
                    res.send(newFileName);
                });
            });

            blobStream.end(file.buffer);
        }


    });

    const processUploadedTypescript =  function(file: any, userId: String, processedCb: any): void {
        const workbook = XLSX.read(file.buffer, {type: "buffer"});
        const sheet_name = workbook.SheetNames;
        const contents = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name[0]]);

        const requests = contents.map((candidateRow: any) => {
            return new Promise((resolve) => {
                const fname = candidateRow.Name;
                const phone = candidateRow.Phone;
                const email = candidateRow.Email;
                const password = candidateRow.Password;
                const currentDate = new Date();
                const  randomBytes = crypto.randomBytes(16);
                const mnemonic = bip39.entropyToMnemonic(randomBytes.toString('hex')) ;
                const wallet = Wallet.generate();
                const privateKey = wallet.getPrivateKeyString();
                const publicKey = wallet.getAddressString();
                const userid = userId;
                const newCandidateRef = candidatesDBRef.push();

                const candidate = {
                    userid : userid,
                    fname: fname,
                    phone: phone,
                    email: email,
                    password: password,
                    privateKey : privateKey,
                    publicKey : publicKey,
                    phrase : mnemonic,
                    created_on : currentDate,
                    link : ""
                }

                console.log("Processed candidate ", fname, "for userid", userid);
                createCandidatePDF(candidate, (downloadLink: any) => {
                    newCandidateRef.set(candidate).then(() => {
                        resolve()
                    });
                });
            });
        })

        Promise.all(requests).then(() => {
            console.log('Completed processing of file', file.originalname)
            processedCb();
        })
            .catch(err => console.log("Error while processing uploaded excel", err));
    }

    const createCandidatePDF =  function(candidate: any, createPdfCb: any): void {
        const file = new PDFDocument();
        const pdfName = candidate.userid + "_" + candidate.fname + "_" + candidate.created_on.getTime();
        const blob = bucket.file(pdfName);
        candidate.link = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
        const blobStream = blob.createWriteStream({
            metadata: {
                contentType: 'application/pdf'
            }
        });

        let pdfContent: String = "";
        Object.keys(candidate).forEach(key => {
            const rowStr = `${key} --> ${candidate[key]}`;
            pdfContent += "\n" + rowStr;
        });
        file.pipe(blobStream);
        file.fillColor("blue")
            .text(pdfContent, 100, 100);
        file.end();
        blobStream.on("error", (err: any) => {
            console.log("Error creating pdf file " + pdfName, err)
            createPdfCb("");
        });
        blobStream.on("finish", () => {
            console.log("Uploaded pdf file", pdfName)
            // Make the image public to the web
            blob.makePublic().then(() => {
                createPdfCb(candidate);
            });
        });
    }
}