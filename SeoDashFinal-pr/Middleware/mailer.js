const nodemailer=require("nodemailer")

const transport=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"hetvimungra1367@gmail.com",
        pass:"pkrf qooq qifl mgzp",
    }
})

module.exports.sendotp=(to,otp)=>{
    let mailoptions={
        from:"hetvimungra1367@gmail.com",
        to:to,
        subject:"SeoDash login Recover Password OTP",
        text:`Your OTP is ${otp}`
    }
    transport.sendMail(mailoptions,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("Otp Send successfully...")

        }

    })
}