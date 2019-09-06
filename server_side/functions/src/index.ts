'use strict'
import * as functions from 'firebase-functions';
import {ExpressConfig} from './config/express';
import {mainDefs} from './controllers/MainController';
mainDefs();

const app = ExpressConfig.getInstance();
exports.api = functions.https.onRequest(app);

