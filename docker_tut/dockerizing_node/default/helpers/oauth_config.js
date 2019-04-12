const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const secret = require("../secret");
const users = require("../db/model");
const hash = require('./hash').hash
const FacebookStrategy = require("passport-facebook");


passport.serializeUser((user,done)=>done(null,user.name));

passport.deserializeUser((name,done)=>{
    users.findOne({name:name})
    .then((u)=>{
        done(null,u);
    }).catch(console.log);
})



passport.use(
    new GoogleStrategy({
        clientID:secret.gclientID,
        clientSecret:secret.gclientSecret,
        callbackURL:secret.gcallbackURL
    }, function(accessToken,refreshToken,profile,done){

            users.findOne({name:profile.displayName})
            .then((user)=>{
                if(user){
                    console.log("user exists");
                    done(null,user);
                }

                else{
                    hash(profile.id)
                    .then((p)=>{
                        new users({
                            name:profile.displayName,
                            passwd:p,
                            chats:[]
                        }).save()
                        .then((u)=>{
                            console.log("creating new user");
                            done(null,u);
                        }).catch(console.log);
                    }).catch(console.log);
                }

            })

    })
)




//facebook oauth
passport.use(new FacebookStrategy({
    clientID:secret.fclientID,
    clientSecret:secret.fclientSecret,
    callbackURL:secret.fcallbackURL
},function(accessToken,refreshToken,profile,done){

    users.findOne({name:profile.displayName})
    .then((u)=>{
        if(u){
            console.log("user exists");
            done(null,u);
        }
        else{
            hash(profile.id)
            .then((p)=>{
                new users({
                    name:profile.displayName,
                    passwd:p
                }).save().then((us)=>{
                    console.log("created new user");
                    done(null,us);
                }).catch(console.log);
            }).catch(console.log);
        }
    }).catch(console.log);

}));
