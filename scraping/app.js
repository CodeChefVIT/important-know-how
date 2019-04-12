const express = require("express");
const cheerio  =require("cheerio");
const request = require('request');
const fs = require('fs');


var url="https://www.google.co.in/";

// request(url,(err,res,body)=>{
//     if(err) console.log(err);
//     else console.log(body);
// });




//
// var ws = fs.createWriteStream("./google.html");
//
// request(url)
// .pipe(ws)
// .on('finish',()=>console.log("done"))
// .on("error",(error)=>console.log(error));



request(url,(err,res,body)=>{
    if(err) throw err;

    var $ = cheerio.load(body);
    var soup = $("#CToSde");
    console.log(soup.text());
})
.on('finish',()=>console.log('done'))
.on('error',err=>console.log("ERROR"));
