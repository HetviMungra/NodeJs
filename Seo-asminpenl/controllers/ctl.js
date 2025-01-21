let schema = require ("../model/firestSchema");


module.exports.login = async(req,res) =>{
    res.render("login")
}

module.exports.userLogin = async (req,res) =>{
    console.log(req.body);
    res.redirect("/dashboard")
}

module.exports.logout = (req,res) =>{
    req.session.destroy();
    res.redirect("/");
}

module.exports.dashboard = (req,res) => {
    res.render("dashboard")
}                          

module.exports.form = (req,res) => {
    res.render("form" , {data:null , isEdit:false});
}




module.exports.addData = async(req,res)=>{
    await schema.create(req.body)
    .then((data)=>{
        res.redirect("/form")
});
};

module.exports.table =async (req,res)=>{
    await schema.find({})
    .then((data) => {
    res.render("table", {data}); 
     });
    };

module.exports.deleteAdminData = async (req,res) => {
    await schema.findByIdAndDelete(req.query.id)
    .then((data) => {
               res.redirect("/table")
        })
}

module.exports.editAdminData  =async (req,res) => {
    let data = await schema.findById(req.query.id)
    res.render("form",{data , isEdit:true})
}

module.exports.updateAdminData  = async (req,res) => {
    await schema.findByIdAndUpdate(req.query.id,req.body)
    .then((data) => {
        res.redirect("/table")
    })
}

