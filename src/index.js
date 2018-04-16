import "babel-polyfill";
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import axios from "axios";

exports.helloWorld = functions.https.onRequest(async (request, response) => {
  let resp = await axios.get("https://api.ipify.org?format=json");

  response.send(`Your ip address is ${resp.data.ip}`);
});
