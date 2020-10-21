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
import { hello_jaden, jaden_dick } from "./api/jadendick";
import { hello_daniel, daniel_honrales } from "./api/danielhonrales";
import { hello_EmilyB, emily_basile } from "./api/EmilyB";
import { hello_rajmeet, rajmeet_juneja } from "./api/Rajmeet"
import { hello_AarushiP, AarushiP } from "./api/AarushiP"
import { hello_pei, PeiYun_Tseng } from "./api/Peiyun";
import { hello_hammad, hammad_khan } from "./api/hammad";
import { hello_farishah, farishah_nahrin } from "./api/farishah";
import { hello_brian, brian_lam } from "./api/brian"
import { hello_sid, sid_khabiya } from "./api/sid"
import { hello_brendan, brendan_lim } from './api/brendan';
import { hello_new_user, mike_nguyen } from './api/test';
import { hello_perry, perry_son } from "./api/PerryS"
import { hello_first_Ian, ian_Ybarra } from "./api/IanYbarra"
import { hello_pingkeng, pingkeng_hsieh } from "./api/pingkeng"
import { hello_ved, ved_sharma } from "./api/Ved";
import { hello_farhan, farhan_rahman } from "./api/FarhanR";
import { hello_awab, awab_abdelrahim } from "./api/awab";
import { hello_abby, abby_utd } from "./api/abby";
import { hello_sai, sai_bommisetty } from "./api/Sai";
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
import { hello_kendal, kendal_wiggins } from "./api/KendalWiggins"

app.get("/daniel-honrales", daniel_honrales);
app.get("/hello-daniel-utd/:name", hello_daniel);

app.get("/hello-first-last/:name", hello_first);
app.get("/first-last", first_last);

app.get("/hello-AarushiP/:name", hello_AarushiP);
app.get("/hello-AarushiP", AarushiP);

app.get("/hello-PeiYun-Tseng/:name", hello_pei);
app.get("/PeiYun_Tseng", PeiYun_Tseng);

app.get("/hello-hammad-khan/:name", hello_hammad);
app.get("/hammad-khan", hammad_khan)

app.get("/hello-farishah-utd/:name", hello_farishah);
app.get("/farishah-nahrin", farishah_nahrin)

app.get("/hello-brian-lam/:name", hello_brian);
app.get("/brian-lam", brian_lam);

app.get("/hello-sid-k/:name", hello_sid);
app.get("/sid-k", sid_khabiya);

app.get("/hello-brendan-lim/:name", hello_brendan);
app.get("/brendan-lim", brendan_lim)

app.get("/hello-new-user/:name", hello_new_user);
app.get("/get-data", mike_nguyen);

app.get("/hello-perry-son/:name", hello_perry);
app.get("/perry-son", perry_son);

app.get("/hello-first-Ian/:name",hello_first_Ian);
app.get("/Ian-Ybarra", ian_Ybarra);

app.get("/hello-pingkeng-hsieh/:name", hello_pingkeng);
app.get("/pingkeng-hsieh", pingkeng_hsieh);

app.get("/hello-ved/:name", hello_ved);
app.get("/ved-utd", ved_sharma);

app.get("/hello-farhan-utd/:name", hello_farhan);
app.get("/farhan-rahman", farhan_rahman);

app.get("/hello-awab-utd/:name", hello_awab);
app.get("/awab-utd", awab_abdelrahim);

app.get("/hello-abby-utd/:name", hello_abby);
app.get("/abby-utd", abby_utd);

app.get("/hello-sai-utd/:name", hello_sai);
app.get("/sai-bommisetty", sai_bommisetty);

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

app.get("/hello-kendal-utd/:name", hello_kendal);
app.get("/kendal-utd", kendal_wiggins);

app.get("/hello-rajmeet-utd/:name", hello_rajmeet);
app.get("/temoc-utd", rajmeet_juneja);

app.get("/hello-EmilyB/ :name", hello_EmilyB);
app.get("/emily-basile", emily_basile);

app.get("/hello-jaden-dick/:name", hello_jaden);
app.get("/jaden-dick", jaden_dick);

/* Change things above this line */

//the line of code below will deploy to firebase cloud functions instead of running locally
//leave this line commented
//export const api = functions.https.onRequest(app);

//the line of code below will run this locally
app.listen(8079);