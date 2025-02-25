const express = require("express");
const route = express.Router();
const ctl = require("../../controllers/Admin Ctls/ctl")
const auth = require("../../middleware/jwtauth");

route.post("/regester",ctl.regester);
route.post("/login",ctl.login)
route.get("/view",auth,ctl.view)
route.post("/chnagePass",ctl.changePass);
route.post("/forgatePass",ctl.forgatePass);
route.post("/changePassAndOtp",ctl.changePassAndOtp)

module.exports = route;