const express = require ("express");
const port = 1009 
const app = express();

 app.set ("view engine","ejs");
 app.use(express.urlencoded());

 let student = [];

 app.get ("/" ,(req,res) => {
     res.render ("index",{student}) ;
 });

 app.post("/addData",(req,res) => {
    req.body.id = String(Date.now());
    student.push(req.body);
    res.redirect("/");
 });

 app.get("/deleteData",(req,res) => {
    let deleteRecord = student.filter((e) => e.id !== req.query.id);
    student = deleteRecord;
    res.redirect("/");
 });

 app.get("/editData/:id" ,(req,res) =>{
    let singleData = student.find((item) => item.id == req.params.id);
    res.render("edit", {singleData})
 })

 app.post("/updateData" , (req,res) =>{
    student.map((e,i) => {
        if(e.id == req.body.id) {
            (e.id = req.body.id),
            (e.name = req.body.name),
            (e.subject = req.body.subject);
        }
        else {
            e;
        }
    })
    res.redirect("/")

   
 });



app.listen(port,(err)=>{
    err ? console.log(err) : console.log ("Server start in port:" + port );

})





