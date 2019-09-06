/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
export class ExpressConfig {
    private static app: any = ExpressConfig.initExpress();

    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() {}

    private static initExpress() {
        const express = require("express");
        const cors = require('cors');
        const {fileParser} = require('express-multipart-file-parser');  //

        const app = express();
        app.use(cors()); // Enable cors

        // FileParser Config
        app.use(fileParser({
            rawBodyOptions: {
                limit: '15mb',  //file size limit
            },
            busboyOptions: {
                limits: {
                    fields: 20   //Number text fields allowed
                }
            },
        }));

        // BodyParser Config
        const bodyParser = require("body-parser");
        app.use(bodyParser.text({type: ()=>true}));
        app.use(bodyParser.json());

        return app;
    }

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(): any {
        return ExpressConfig.app;
    }
}