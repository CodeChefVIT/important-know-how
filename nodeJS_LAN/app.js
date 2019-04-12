const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello LAN world");
});

app.listen(80,"0.0.0.0",()=>console.log("Listening..."));