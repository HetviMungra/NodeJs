const express = require("express")
const route = express.Router()
const ctl = require("../../controllers/Manager Ctls/ctl");

route.post("/addManager",ctl.addManager);
route.post("/loginManager",ctl.loginManager);
route.post("/chnagePassManager",ctl.chnagePassManager);
route.post("/forgetPassManager",ctl.forgetPassManager);
route.post("/recoverPassWithOtpManager",ctl.recoverPassWithOtpManager);
route.delete("/deleteManager",ctl.deleteManager);

module.exports = route;