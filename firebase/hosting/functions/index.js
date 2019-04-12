const functions = require('firebase-functions');
const express = require('express');

var app = express();

app.get('/',(req,res)=>{
    res.send('hello world from firebase hosting');
});


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.app = functions.https.onRequest(app);
