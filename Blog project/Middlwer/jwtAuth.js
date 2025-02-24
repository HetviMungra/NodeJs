const jwt = require("jsonwebtoken")

// const auth = (req,res,next)=>{
//     let token = req.header("Authorization");
//     console.log(token)
//     if(!token){
//         return res.status(200).json({msg : "Token not found"})
//     }
//     let newtoken = token.slice(7,token.length)
//     console.log(newtoken);
//     let decode = jwt.verify(newtoken,"rnw");
//     console.log(decode);
//     req.user = decode
//     next();
//     }

const auth = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: 'Access denied' });

    jwt.verify(token, 'secret_key', (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Invalid token' });
        req.user = decoded; // Set user information in req.user
        next();
    });
};

module.exports = {auth}