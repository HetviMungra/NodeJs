const schema = require("../../model/Employee/schema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mailer = require("../../middleware/Admin/mailer");

module.exports.addEmployee = async (req, res) => {
    let employee = await schema.findOne({ email: req.body.email })

    if (employee) {
        return res.status(200).json({ msg: "Employee Already Axists !" })
    }

    else {
        req.body.password = await bcrypt.hash(req.body.password, 10)
        await schema.create(req.body)

        res.status(200).json({ msg: "Exployee Created Successfully !" })
    }
}

module.exports.deleteEmployee = async (req, res) => {
    let employee = await schema.findOne({ email: req.body.email })

    if (!employee) {
        return res.status(200).json({ msg: "Employee Not Found !" })
    }

    await schema.findByIdAndDelete(employee.id)
    res.status(200).json({ msg: "Employee Deleted Successfully !" })
}

module.exports.loginEmployee = async (req, res) => {
    let employee = await schema.findOne({ email: req.body.email })

    if (!employee) {
        return res.status(200).json({ msg: "Employee Not Found !" })
    }

    if (await bcrypt.compare(req.body.password, employee.password)) {
        let token = jwt.sign({ employeeData: employee }, "employee", { expiresIn: "1h" })
        res.status(200).json({ msg: "Employee Login Successfully !", token: token })
    } else {
        res.status(200).json({ msg: "Password Is Wrong !" })
    }
}

module.exports.changePassEmployee = async (req, res) => {
    let employee = await schema.findOne({ email: req.body.email })

    if (!employee) {
        return res.status(200).json({ msg: "Employee Not Found !" })
    }

    if (await bcrypt.compare(req.body.oldPass, employee.password)) {
        if (req.body.newPass != req.body.oldPass) {
            if (req.body.newPass == req.body.conPass) {
                let newPass = await bcrypt.hash(req.body.newPass,10)
                employee.password = newPass;
                await employee.save()
                res.status(200).json({ msg: "Password Chnaged !" })
            } else {
                res.status(200).json({ msg: "New Password And Comfirm Password Are Not Match " })
            }
        } else {
            res.status(200).json({ msg: "New Password And Old Password Are Match" })
        }
    } else {
        res.status(200).json({ msg: "Old Password Is Wrong !" })
    }
}


module.exports.otpSendEmployee = async (req,res)=>{
    let employee = await schema.findOne({email:req.body.email})

    if(!employee){
        return res.status(200).json({msg : "Employee Not Found !"})
    }

    let otp = Math.floor(Math.random()*1000 + 9000)
    mailer.sendOtp(req.body.email,otp)

    req.session.otp = otp;
    req.session.employeeData = employee;

    res.status(200).json({msg : "OTP Send Successfully :" + otp})
}

module.exports.chnagePassWithOTPEmployee = async (req,res)=>{
    let otp = req.session.otp;
    let employee = req.session.employeeData;

    if(req.body.otp == otp){
        if(await bcrypt.compare(req.body.newPass,employee.password)){
            res.status(200).json({msg:"Old Password And New Password Are Same !"})
        }else{
            if(req.body.newPass == req.body.conPass){
                let password = await bcrypt.hash(req.body.newPass,10)
                let employeeData = await schema.findByIdAndUpdate(employee._id,{password:password})
                res.status(200).json({msg : "Password Changed !"})
            }
            else{
                res.status(200).json({msg:"New Password And Old Password Are Not Match !"})
            }
        }
    }
    else{
        res.status(200).json({msg:"Wrong OTP"})
    }

}