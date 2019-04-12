const express = require('express');

//jsp-js rendering engine for express
const jspjs = require('jsp-js').Renderer;

//set options->
var options = {
    root:'',
    tags:'',
    globals:''
}

const jsp = new jspjs(options);

var app = express();

app.get('/',function(req,res){

    res.send( jsp.render('./index.jsp',{}) );
});

console.log("Listening on localhost:3000");
app.listen(3000);
