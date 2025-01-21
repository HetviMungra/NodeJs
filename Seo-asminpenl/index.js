const express = require("express");
const port = 2006;

const path = require ("path");
const app = express()
const db = require("./confing/db")
const route = require("./routes/route")
const cookies= require("cookie-parser")
const passport = require ("passport")
const session = require ("express-session");

 
app.set("view engine" , "ejs")
app.use(express.urlencoded()); 

app.use(express.static(path.join(__dirname,"public")));

app.use(session({
    name : "local",
    secret: 'rnw',
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge : 100 * 100 * 60 },
  })
)
app.use(cookies());
app.use(passport.initialize());
app.use(passport.session());
app.use("/",route)


app.listen (port,(err)=>{
    err ? console.log("err")  : console.log(`server start: http://localhost:${port}`);
})