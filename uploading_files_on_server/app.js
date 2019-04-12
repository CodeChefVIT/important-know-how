const express = require("express");
const multer = require("multer");
const fs = require("fs");
const shell = require("shelljs");

var upload = multer({dest:"uploads/"})

var app = express();

app.set("view engine","ejs");


app.get("/",(req,res)=>{
    res.render("index");
});



app.post("/",upload.single("file"),(req,res)=>{


    fs.rename(req.file.path,"uploads/"+req.file.originalname);

    var data = shell.exec("./checker "+"./uploads/"+req.file.originalname).toString();
    var array = data.split("\n");

    res.render("result",{data:array});
});


app.listen(3000,()=>{
    console.log("Listening on port 3000");
});
