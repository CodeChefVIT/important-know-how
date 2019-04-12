const cheerio  =require("cheerio");
const request = require('request');




module.exports.get = function get(url,dom){
    return new Promise((resolve,reject)=>{

        request(url,(err,res,body)=>{
            if(err) reject(err);

            var $ = cheerio.load(body);
            var soup = $(dom);

            resolve(soup.html());
        });

    });
}


var url="https://stackoverflow.com/search?q=flutter";
var dom='html'

get(url,dom)
.then(data=>console.log(data))
.catch(err=>console.log("error in scraping"));
