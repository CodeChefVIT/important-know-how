const jwt = require("jsonwebtoken");
const secret = require("../secret");

module.exports = function verify(req,res,next){
    console.log(req.headers.Authorization);
    jwt.verify(req.get('Authorization'),secret.secretKey,(err,decodedData)=>{
        if(err)
            res.send(err);
        else{
            req.data = decodedData;
            next();
        }
    });
}
