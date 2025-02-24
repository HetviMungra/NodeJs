const jwt = require("jsonwebtoken")

const auth = (req,res,next)=>{
    let token = req.header("Authorization");
    console.log(token)
    if(!token){
        return res.status(200).json({msg : "Token not found"})
    }
    let newtoken = token.slice(7,token.length)
    console.log(newtoken);
    let decode = jwt.verify(newtoken,"rnw");
    console.log(decode);
    req.user = decode
    next();
    }



module.exports = auth