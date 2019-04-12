var pythonshell = require("python-shell");

pythonshell.run('./test.py',function(error){
    if(error) throw(error);
    console.log("Ran a python script using node js")
});


//also see child_process npm package
