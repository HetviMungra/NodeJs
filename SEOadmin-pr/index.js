const express = require("express");
const port = 2006;

const path = require ("path");
const app = express()
const db = require("./confing/db")
const route = require("./routes/route")
const cookies= require("cookie-parser")

 
app.set("view engine" , "ejs")
app.use(express.urlencoded()); 

app.use(express.static(path.join(__dirname,"public")));
app.use(cookies());

app.use("/",route)

// app.use("/",require("./routes/route"))

// app.get("/",(req,res) => {
//     res.render("dashboard")
// })
app.listen (port,(err)=>{
    err ? console.log("err")  : console.log(`server start: http://localhost:${port}`);
})