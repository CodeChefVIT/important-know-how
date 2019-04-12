const mongoose = require("mongoose");

mongoose.connect(require("../secret").mongoURL);

mongoose.connection
.once("open",()=>console.log("Connection to mongoDB is open"))
.on("error",(err)=>console.log("Error connecting to mongoDB"));
