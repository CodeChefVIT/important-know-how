const express = require("express");
const morgan = require("morgan");
var app = express();


app.use(morgan('dev'));
app.use(express.static('static'));


app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000,()=>console.log("Listening"));
