import * as functions from 'firebase-functions';
import { Request, Response } from "express";
import express from "express";
import cors from "cors";
const app = express();
app.use(cors({ origin: true }));
functions.logger.info("Starting Application");

// example function that returns hello world
app.get("/hello", (request: Request, response: Response) => {
    response.json({
        message: "hello world!"
    });
});

/* Change things below this line */

// import functions
import { hello_first, first_last } from "./api/template";
import { hello_ryan, ryan_noeske } from "./api/ryan";

import { hello_vaughan, vaughan_mcinerney } from "./api/vaughan";

app.get("/first-last", first_last);
app.get("/hello-first-last/:name", hello_first);

app.get("/hello-ryan-utd/:name", hello_ryan);
app.get("/ryan-noeske", ryan_noeske);
app.get("/hello-vaughan-utd/:name", hello_vaughan);
app.get("/vaughan-utd", vaughan_mcinerney);

/* Change things above this line */

//the line of code below will deploy to firebase cloud functions instead of running locally
//leave this line commented
//export const api = functions.https.onRequest(app);

//the line of code below will run this locally
app.listen(8079);
