//https://www.npmjs.com/package/compile-run

const compiler = require("compile-run");
const shell = require("shelljs");

// compiler.runFile("./pythonsample.py",null,function(stdout,stderr,err){
//
//     if(!err){
//         console.log(stdout);
//         console.log(stderr);
//     }
//     else{
//         console.log(err);
//     }
// });

//
// function compileFile(file,input){
//     return new Promise( (resolve,reject)=>{
//
//         compiler.runFile(file,input,function(stdout,stderr,err){
//
//             if(!err){
//                 console.log(stdout);
//                 //console.log(stderr);
//                 resolve("Ran code");
//             }  else{
//                 reject(err);
//             }
//         });
//
//     });
// }
//
//
// compileFile("./sample.c",1).then(()=>{
//     console.log("Done");
// });
//
//
// //NOTE C and C++ file are not running



shell.exec("./output");
