import {bucket, firebase} from "../config/firebaseConfig";
import {ExpressConfig} from '../config/express';
const app = ExpressConfig.getInstance();

import {Candidate, createCandidate} from "../interfaces/Candidate";

const XLSX = require('xlsx');
const PDFDocument = require('pdfkit');

const candidatesDBRef = firebase.database().ref('candidates');

export const transcriptsDefs = function () {
    app.post('/insert_candidate', (req:any, res:any) => {
        const userId = req.body.userid;

        const newCandidateRef = candidatesDBRef.push();
        const candidate = createCandidate(userId, req.body);
        createCandidatePDF(candidate, (downloadLink: any) => {
            newCandidateRef.set(candidate).then(() => {
                return res.send(`Inserted candidate for userId, ${userId}`);
            });
        });
    });

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
                    res.send(`Completed processing for userId, ${userId}`);
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

    const createCandidatePDF =  function(candidate: any, createPdfCb: any): void {
        const pdfFile = new PDFDocument();
        const blob = bucket.file(candidate.fileName);
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
        pdfFile.pipe(blobStream);
        pdfFile.fillColor("blue")
            .text(pdfContent, 100, 100);
        pdfFile.end();
        blobStream.on("error", (err: any) => {
            console.log("Error creating pdf file " + candidate.fileName, err)
            createPdfCb("");
        });
        blobStream.on("finish", () => {
            console.log("Uploaded pdf file", candidate.fileName)
            // Make the image public to the web
            blob.makePublic().then(() => {
                createPdfCb(candidate);
            });
        });
    }
}