const express = require("express");
const port = 5000;

const app = express();
const db = require("./config/db");
const cors = require("cors");
const session = require("express-session")

app.use(session({
    secret: 'admin',
    resave: true,
    saveUninitialized: false,
    cookie: {maxAge:100*100*60}
  }))
// app.use(express.urlencoded());
app.use(express.json());
app.use(cors({origin: "http://localhost:5173"}));

app.use("/",require("./routes/Admin Route/route"));
app.use("/manager",require("./routes/Manager Route/route"));
app.use("/employee",require("./routes/Employee Route/route"));

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("Serer started on Port : " + port);
});