const express = require ("express");
const route = express.Router();
const ctl = require("../controllers/ctl")

route.get("/",ctl.login)
route.post("/userLogin",ctl.userLogin)
route.get("/logout",ctl.logout)
route.get("/dashboard",ctl.dashboard)
route.get("/form",ctl.form)
route.get("/table",ctl.table)
route.post("/addData", ctl.addData)
route.get("/deleteAdminData",ctl.deleteAdminData)
route.get("/editAdminData",ctl.editAdminData)
route.post("/updateAdminData",ctl.updateAdminData)



module.exports = route;