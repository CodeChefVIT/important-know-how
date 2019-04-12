const bcrypt = require("bcrypt");
const util = require("util");
const secret = require("../secret");

bcrypt.hash = util.promisify(bcrypt.hash);
bcrypt.compare = util.promisify(bcrypt.compare);

module.exports.hash = function hash(passwd){
    return new Promise((resolve,reject)=>{
        bcrypt.hash(passwd,secret.salt)
        .then(resolve)
        .catch(reject);
    });
}

module.exports.compare = function compare(passwd,hs){
    return new Promise((resolve,reject)=>{
        bcrypt.compare(passwd,hs)
        .then(resolve)
        .catch(reject);
    })

}
