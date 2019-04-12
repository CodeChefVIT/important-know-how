const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const secret = require('../secret');

router.get('/google',passport.authenticate('google',{
    scope:['profile']
}));


router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    if(req.user){
        jwt.sign({user:req.user},secret.secretKey,{expiresIn:'2d'},(err,token)=>{
            if(err)
                res.send(err);

            req.session.name = req.user.name;
            res.json({token:token,name:req.session.name} );
        });
    }
    else
        res.send("error");
});

router.get("/logout",(req,res)=>{
    req.logout();
    res.redirect('/');
});


module.exports = router;
