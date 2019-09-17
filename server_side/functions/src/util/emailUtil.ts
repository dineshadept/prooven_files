import {senderEmail, transporter} from "../config/emailConfig";

export class EmailUtil {
    static sendEmail(subject: String, to: String[], cc: String[], bcc: String[], body: String, emailCb: any) {
        const mailOptions = {
            from: senderEmail,
            to: to,
            cc: cc,
            bcc: bcc,
            subject: subject,
            text: body
        }

        transporter.sendMail(mailOptions, function(error:any, info:any){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
            emailCb();
        });
    }
}
