const express = require("express");
const body_parser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const secret = require("./secret");
const passport = require("passport");
require("./db/connect");
require("./helpers/oauth_config");

const app = express();

app.use(morgan('dev'));
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:false}));
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
    secret:secret.secretKey,
    saveUninitialized:false,
    resave:false
}));

//routes
app.use(require("./routes/main"));
app.use("/auth",require("./routes/oauth"));


app.listen(process.env.PORT || 3000,()=>console.log("Listening on port 3000"));
