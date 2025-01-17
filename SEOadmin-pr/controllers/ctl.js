let schema = require ("../model/firestSchema");


module.exports.login = async(req,res) =>{
    res.render("login")
}

module.exports.userLogin = async (req,res) =>{
    let admin = await schema.findOne({email : req.body.email})
    if(admin){
        if(admin.password == req.body.password){
            res.cookie("adminData",admin)
            res.redirect("/dashboard")
        }
        else {
            res.redirect("/")
        }
    }
    else {
        res.redirect("/")
    }

}
module.exports.dashboard = (req,res) => {
    req.cookies.adminData ?  res.render("dashboard")
                           : res.redirect("/")
}                          

module.exports.form = (req,res) => {
    req.cookies.adminData
    ? res.render("form" , {data:null , isEdit:false})
    : res.redirect("/")
}




module.exports.addData = async(req,res)=>{
    await schema.create(req.body)
    .then((data)=>{
        res.redirect("/form")
})

}

module.exports.table =async (req,res)=>{
    if (req.cookies.adminData){
        await schema.find({})
        .then((data) => {
        res.render("table", {data}); 
         });
    } else {
        res.redirect("/");
    }
    };

module.exports.deleteAdminData = async (req,res) => {
    await schema.findByIdAndDelete(req.query.id)
    .then((data) => {
       
        res.redirect("/table")
        })
}

module.exports.editAdminData  =async (req,res) => {
    let data = await schema.findById(req.query.id)
    req.cookies.adminData 
    ? res.render("form",{data , isEdit:true})
    : res.redirect("/")
}

module.exports.updateAdminData  = async (req,res) => {
    await schema.findByIdAndUpdate(req.query.id,req.body)
    .then((data) => {
        res.redirect("/table")
    })
}

module.exports.logout = (req,res) =>{
    res.clearCookie("adminData");
    res.redirect("/");
}