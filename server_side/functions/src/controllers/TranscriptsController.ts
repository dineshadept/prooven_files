import {bucket, firebase} from "../config/firebaseConfig";
import {ExpressConfig} from '../config/express';
const app = ExpressConfig.getInstance();

import {Candidate, createCandidate} from "../interfaces/Candidate";
import {certificateHtml} from '../config/certificate.html';
import {UserUtil} from "../util/userUtil";
import {successMsgs} from "../config/Constants";

const XLSX = require('xlsx');
const pdf = require('html-pdf');

const candidatesDBRef = firebase.database().ref('candidates');

export const transcriptsDefs = function () {
    app.post('/insert_candidate', (req:any, res:any) => {
        const userId = req.body.userid;

        // Send response if userId is invalid
        UserUtil.isUserExistsHttpRes(userId, res);

        const newCandidateRef = candidatesDBRef.push();
        const candidate = createCandidate(userId, req.body);
        createCandidatePDF(candidate, (downloadLink: any) => {
            newCandidateRef.set(candidate).then(() => {
                return res.send(`Inserted candidate for userId, ${userId}`);
            });
        });
    });

    app.post('/read_upload',  (req:any, res:any) => {
        const userId = req.body.userid;

        // Send response if userId is invalid
        UserUtil.isUserExistsHttpRes(userId, res);

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
                processUploadedTypescript(file, userId, () => {
                    console.log(`Completed processing for userId, ${userId}`);
                    const resJson = successMsgs.candidates_update_success;
                    res.status(resJson.code).send(resJson.message);
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
                console.log("Processed candidates uploaded for userId", userId);
                const newCandidateRef = candidatesDBRef.push();
                const candidate: Candidate = createCandidate(userId, candidateRow);
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

    const createCandidatePDF =  function(candidate: Candidate, createPdfCb: any): void {
        const options = {
            format: 'A3',
            orientation: "landscape"
        };
        let certificateContent: String = certificateHtml;
        Object.entries(candidate).forEach(([key, value]) => {
            certificateContent = certificateContent.replace(`{{${key}}}`, value.toString());

        })
        pdf.create(certificateContent, options).toStream(function(err: any, stream: any){
            const blob = bucket.file(candidate.fileName);
            const blobStream = blob.createWriteStream({
                metadata: {
                    contentType: 'application/pdf'
                }
            });
            blobStream.on("error", (blobStreamErr: any) => {
                console.log("Error creating pdf file " + candidate.fileName, blobStreamErr)
                createPdfCb("");
            });
            blobStream.on("finish", () => {
                console.log("Uploaded pdf file", candidate.fileName)
                // Make the image public to the web
                blob.makePublic().then(() => {
                    createPdfCb(candidate);
                });
            });

            stream.pipe(blobStream);
        });
    }
}