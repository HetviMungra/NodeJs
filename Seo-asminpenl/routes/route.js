const express = require ("express");
const route = express.Router();
const ctl = require("../controllers/ctl")
const passport =require ("../middleware/passport")


route.get("/",ctl.login)
route.post("/userLogin",passport.authenticate("local",{failureRedirect:"/"}),ctl.userLogin)
route.get("/logout",ctl.logout)

route.get("/dashboard",passport.checkAuth,ctl.dashboard)
route.get("/form",passport.checkAuth,ctl.form)
route.get("/table",passport.checkAuth,ctl.table)

route.post("/addData", ctl.addData)
route.get("/deleteAdminData",ctl.deleteAdminData)
route.get("/editAdminData",ctl.editAdminData)
route.post("/updateAdminData",ctl.updateAdminData)


    
module.exports = route;