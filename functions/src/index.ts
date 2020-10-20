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

// Imported code from trackit
//add your import in addition to the ones above
import { hello_kendal, kendal_wiggins } from "./api/KendalWiggins"

app.get("/hello-first-last/:name", hello_first);

//add your endpoint in addition to the default one
app.get("/hello-kendal-utd/:name", hello_kendal);
app.get("/kendal-utd", kendal_wiggins);


app.get("/first-last", first_last);
app.get("/hello-first-last/:name", hello_first);

/* Change things above this line */

//the line of code below will deploy to firebase cloud functions instead of running locally
//leave this line commented
//export const api = functions.https.onRequest(app);

//the line of code below will run this locally
app.listen(8079);
