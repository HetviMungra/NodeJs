const schema = require("../../model/Manager/schema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mailer = require("../../middleware/Admin/mailer");

module.exports.addManager = async (req, res) => {
    let manager = await schema.findOne({ email: req.body.email })

    if (manager) {
        
        return res.status(200).json({ msg: "Manager Already Created Please Login" })
    }
    else {
        req.body.password = await bcrypt.hash(req.body.password, 10)

        await schema.create(req.body)
        res.status(200).json({ msg: "Manager Created" })

    }
};

module.exports.deleteManager = async (req, res) => {
    let manager = await schema.findOne({ email: req.body.email })

    if (manager) {
        await schema.findByIdAndDelete(manager.id)
        res.status(200).json({ msg: "Manager Delete Successfully !" })
    }
    else {
        res.status(200).json({ msg: "Manager Not Found" })
    }
}

module.exports.loginManager = async (req, res) => {
    let manager = await schema.findOne({ email: req.body.email })

    if (!manager) {
        return res.status(200).json({ msg: "Manager Not Found !" })
    }

    if (await bcrypt.compare(req.body.password, manager.password)) {
        let token = jwt.sign({ managerData: manager }, "manager", { expiresIn: "1h" })
        res.status(200).json({ msg: "Manager Login Successfully !", token: token })

    }
    else {
        res.status(200).json({ msg: "Password Is Wrong" })
    }
}

module.exports.chnagePassManager = async (req, res) => {
    let manager = await schema.findOne({ email: req.body.email })

    if (!manager) {
        return res.status(200).json({ msg: "Manager Not Found !" })
    }

    if (await bcrypt.compare(req.body.oldPass, manager.password)) {
        if (req.body.newPass != req.body.oldPass) {
            if (req.body.newPass == req.body.conPass) {
                let newPass = await bcrypt.hash(req.body.newPass, 10)
                manager.password = newPass
                await manager.save()
                return res.status(200).json({ msg: "Password Changed !" })
            } else {
                res.status(200).json({ msg: "New Password And Confirm Password Not Match!" })
            }
        } else {
            res.status(200).json({ msg: "Old Password And New Password Are Same !" })
        }
    } else {
        res.status(200).json({ msg: "Old Password Not Match !" })
    }
}

module.exports.forgetPassManager = async (req, res) => {
    let manager = await schema.findOne({ email: req.body.email })

    if(!manager){
        return res.status(200).json({ msg: "Manager Not Found !" })
    }

    let otp = Math.floor(Math.random()*1000 + 9000)
    mailer.sendOtp(req.body.email,otp)
    console.log(otp);
    
    req.session.otp = otp
    req.session.managerData = manager;

    res.status(200).json({msg : "Otp Send Successfully : " + otp})
}

module.exports.recoverPassWithOtpManager = async (req,res) => {
    let otp = req.session.otp
    let manager = req.session.managerData

    if(req.body.otp == otp){
        if(await bcrypt.compare(req.body.newPass,manager.password))
        {
            res.status(200).json({msg : "Old Password And NewPassword Are Same !"})
        }
        else{
            if(req.body.newPass == req.body.conPass){
                let password = await bcrypt.hash(req.body.newPass,10)
                let managerData = await schema.findByIdAndUpdate(manager._id,{password:password})
                res.status(200).json({msg : "Passowrd Changed !"})
            }
            else{
                res.status(200).json({ msg: "new Password Nad Conirm Password Are not Match" })
            }
        }
    }
    else{
        res.status(200).json({msg : "Wrong OTP"})
    }
}