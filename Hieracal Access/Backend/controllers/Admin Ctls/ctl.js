const schema = require("../../model/Admin/schema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mailer = require("../../middleware/Admin/mailer")


module.exports.regester = async (req, res) => {
    let admin = await schema.findOne({ email: req.body.email })

    if (admin) {
        return res.status(200).json({ msg: "User already exist please login" })
    }
    else {
        req.body.password = await bcrypt.hash(req.body.password, 10)

        await schema.create(req.body);
        res.status(200).json({ msg: "User Registered" })
    }
};

module.exports.login = async (req, res) => {
    let admin = await schema.findOne({ email: req.body.email })

    if (!admin) {
        return res.status(200).json({ msg: "Email Not Found !" })
    }

    if (await bcrypt.compare(req.body.password, admin.password)) {
        let token = jwt.sign({ adminData: admin }, "hm", { expiresIn: "1h" })
        res.status(200).json({ msg: "Admin Logged Successfully !", token: token })

    }
    else {
        return res.status(200).json({ msg: "Password Not match" })
    }

}

module.exports.view = async (req, res) => {
    await schema.find({})
        .then((data) => {
            res.status(200).json({ msg: "Admin Get Successfully !" })
        })
}


module.exports.changePass = async (req, res) => {
    let admin = await schema.findOne({ email: req.body.email });


    if (await bcrypt.compare(req.body.oldpassword, admin.password)) {

        if (req.body.oldpassword != req.body.newPassword) {
            if (req.body.newPassword == req.body.conPassword) {
                let newPass = await bcrypt.hash(req.body.newPassword, 10)
                admin.password = newPass;
                await admin.save();
                return res.status(200).json({ msg: "Password changed" });
            } else {
                return res.status(400).json({ msg: "new Password and confirm password are not same" });
            }
        } else {
            return res.status(400).json({ msg: "Old Password and new password are same" });
        }
    }
    else {
        return res.status(400).json({ msg: "Old Password Not Match!" });
    }
};

module.exports.forgatePass = async (req, res) => {
    let admin = await schema.findOne({ email: req.body.email })

    if (!admin) {
        console.log("Admin Not Found");
        res.status(200).json({ msg: "Admin Not Found" })
    }

    let otp = Math.floor(Math.random() * 1000 + 9000)
    mailer.sendOtp(req.body.email, otp)
    console.log(otp);


    req.session.otp = otp;
    req.session.adminData = admin;

    res.status(200).json({ msg: "Otp Send Successfully :" + otp })
}


module.exports.changePassAndOtp = async (req, res) => {
    let otp = req.session.otp
    let admin = req.session.adminData

    if (req.body.otp == otp) {
        
        if (await bcrypt.compare(req.body.newPassword,admin.password)) {
            res.status(200).json({ msg: "NewPassword And Old Password Are Same Please Try With New Password" })
        }
        else {
            if (req.body.newPassword == req.body.conPassword) {
                let password = await bcrypt.hash(req.body.newPassword, 10)
                let adminData = await schema.findByIdAndUpdate(admin._id, { password: password })
                res.status(200).json({ msg: "Password Chnaged" })
            }
            else {
                res.status(200).json({ msg: "new Password Nad Conirm Password Are not Match" })
            }
        }
    }
    else {
        res.status(200).json({ msg: "Worng OTP" })
    }
}