const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema2");

//mongodb
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/gql");
mongoose.connection
.once('open',()=>console.log("Connected to mongodb"))
.on("error",console.log);

const app = express();

app.use("/graphql",graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(3000,()=>console.log("Listening on port 3000"));