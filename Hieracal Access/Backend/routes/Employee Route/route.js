const express = require("express")
const route = express.Router()
const ctl = require("../../controllers/Employee Ctls/ctl");

route.post("/addEmployee",ctl.addEmployee);
route.post("/loginEmployee",ctl.loginEmployee);
route.post("/changePassEmployee",ctl.changePassEmployee);
route.post("/OtpSendEmployee",ctl.otpSendEmployee);
route.post("/chnagePassWithOTPEmployee",ctl.chnagePassWithOTPEmployee);
route.delete("/deleteEmployee",ctl.deleteEmployee);

module.exports = route;