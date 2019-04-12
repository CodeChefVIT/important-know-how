const request = require("request");
const fs = require("fs");

request.post(url,{form:{key:"value"}},(err,response,body)=>{
    if(err) console.log(err);
    else
        fs.writeFileSync(__dirname + "/result.html",body);
});
