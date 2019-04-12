const child_process = require("child_process");
const util = require('util');

// var ls = child_process.spawn('ls');
//
// ls.stdout.on('data',(data)=>{
//     console.log(data.toString());
//
// });
//
//
// ls.on('exit',()=>console.log("done"));

// exec = child_process.exec('python p.py');
//
// exec.stdout.on('data',data=>{
//     console.log(data.toString())
// });
//
// exec.stderr.on('data',data=>console.log(data.toString()));





//NOTE
// var exec = child_process.exec;
//
// exec('ls -a',(err,stdout,stderr)=>{
//     if(err)
//         console.log(`error: ${err}`);
//     else
//         console.log(`stderr:\n ${stderr}`);
//         console.log(`stdout:\n ${stdout}`);
// });


//NOTE promisify
const exec = util.promisify(child_process.exec);
exec('python p.py')
.then((data)=>console.log(data.stdout))
.catch((err)=>console.log(err));



//NOTE async await
// async function test(){
//
//     const {stdout,stderr} = await exec('ls');
//     console.log(stdout);
//     console.log(stderr);
// }
// test();




//
// var {execFile} = require("child_process");
// execFile = util.promisify(execFile);
// execFile('ls')
// .then(data=>console.log(data.stdout))
// .catch(err=>console.log(err));
