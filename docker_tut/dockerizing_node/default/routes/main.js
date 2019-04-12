const router = require("express").Router();
const users = require("../db/model");
const jwt = require("jsonwebtoken");
const hash = require("../helpers/hash").hash;
const compare = require("../helpers/hash").compare;
const secret = require("../secret");

router.get("/",(req,res)=>{
    res.render("index")
    //res.json({message:"welcome"});
});



router.post("/", async (req,res)=>{
    if(req.body.name==="" || req.body.passwd==="")
        res.send("Empty fields")
    var user = await users.findOne({name:req.body.name});

    //signup
    if(req.body.confirm){

            if(user){
                res.json({message:"user already exists"});
            }

            else{
                hash(req.body.passwd)
                .then((h)=>{

                    var obj = new users({
                        name:req.body.name,
                        passwd:h,
                    });

                    obj.save()
                    .then((o)=>{
                        jwt.sign({user:o},secret.secretKey,{expiresIn:"2d"},(err,token)=>{
                            if(err)
                                res.send(err)
                            req.session.name = o.name;
                            res.json({token:token,name:req.session.name});
                        });
                    })
                    .catch(console.log);

                }).catch(console.log);


            }

        }

        //login
        else{
                compare(req.body.passwd,user.passwd)
                .then((bool)=>{
                    if(user && bool )
                        {
                            jwt.sign({user},secret.secretKey,(err,token)=>{
                                if(err)
                                    res.send(err)
                                req.session.name = user.name;
                                res.json({token:token,name:req.session.name});
                            })
                        }
                    else
                        res.json({message:"name or password entered is wrong, please try again"});
                }).catch(console.log);

        }
    });




module.exports = router;
