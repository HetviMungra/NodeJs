const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"hetvimungra1367@gmail.com",
        pass:"pkrf qooq qifl mgzp",
    },
});

module.exports.sendOtp = (to,otp)=>{
    let mailoptions = {
        from:"hetvimungra1367@gmail.com",
        to : to,
        subject : "Your Password Reset Otp ",
        text : `Your OTP is : ${otp}`
    }

    transport.sendMail(mailoptions,(err)=>{
        err ? console.log(err) : console.log("OTP Send Successfully !");
    })
};