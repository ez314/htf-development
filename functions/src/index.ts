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
import { hello_neha, neha_rode } from "./api/neha";
import { hello_abhishek, abhishek_mishra } from "./api/abhishek";
import { hello_jerry, jerry_teng } from "./api/jerry";
import { hello_travis, travis_dula } from "./api/travis-dula";
import { hello_hannah, hannah_eason } from "./api/hannah"
import { hello_paulL, paul_lupeituu } from "./api/paulL";
import { hello_temoc, temoc_utd } from "./api/temoc"; //I added this line
import { hello_RichardN, Richard_Noeske } from "./api/RichardN";
import { hello_nathan_adam, nathan_adam } from "./api/schobbish";
import { hello_ryan, ryan_noeske } from "./api/ryan";
import { hello_vaughan, vaughan_mcinerney } from "./api/vaughan";
import { hello_Nam, nam_truong } from "./api/NamT";

app.get("/hello-first-last/:name", hello_first);
app.get("/first-last", first_last);

app.get("/hello-neha/:name", hello_neha);
app.get("/neha-rode", neha_rode);

app.get("/hello-abhishek-utd/:name", hello_abhishek);
app.get("/abhishek_mishra", abhishek_mishra);

app.get("/hello-jerry-utd/:name", hello_jerry)
app.get("/jerry_teng", jerry_teng)

app.get("/hello-travis/:name", hello_travis);
app.get("/travis-dula", travis_dula);

app.get("/hello-hannah-utd/:name", hello_hannah);
app.get("/hannah-eason", hannah_eason)

app.get("/hello-paulL-utd/:name", hello_paulL);
app.get("/paul-lupeituu", paul_lupeituu);

app.get("/hello-temoc-utd/:name", hello_temoc); //I added this line
app.get("/temoc-utd", temoc_utd);

app.get("/hello-RichardN-utd/:name", hello_RichardN);
app.get("/Richard-Noeske", Richard_Noeske);

app.get("/hello-nam-utd/:name", hello_Nam);
app.get("/nam-utd", nam_truong);

app.get("/hello-nathan-adam/:name", hello_nathan_adam);
app.get("/nathan-adam", nathan_adam)

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
