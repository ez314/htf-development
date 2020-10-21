import { Request, Response } from "express";
import * as functions from 'firebase-functions';
import * as axios from "axios";

/**
 * 
 * @param request contains the query parameter name
 * @param response returns hello <name>
 */
export const hello_rajmeet = async (request: Request, response: Response): Promise<void> => {
    const name = request.params.name;
    response.json({
        message: `Hello ${name}`
    });
}

/**
 * @param request unique request that contains persons firstname-lastname
 * @param response queries the hacktoberfest database and returns the user data
 */
export const rajmeet_juneja = async (request: Request, response: Response): Promise<void> => {
    const baseurl = functions.config().baseurl.firebase; // resolves to https://cloudfunctions.net
    const data = {
        email: "rjuneja@idtech.com"
    }
    const result = await axios.default.post(baseurl, data);
    const res = result.data;
    response.json({
        result: res
    });
}