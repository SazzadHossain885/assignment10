const jwt = require('jsonwebtoken');

module.exports = (req, res, next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if(err){
                res.status(401).json({status:"unauthorized"});
            }
            else {
                const email = decoded.data.email;
                req.headers.email = email;
                next();
            }
        })
    }
    catch(err){
        res.status(400).json({status:"Fail", data:err});
    }
}