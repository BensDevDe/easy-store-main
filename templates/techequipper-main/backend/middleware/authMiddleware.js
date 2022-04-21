// it is going to validate the token
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";


const protect = async (req,res,next) => {
    console.log("PROTECT: ENTERED")
    let token ;
    console.log(req.headers.authorization);
    // returns Bearer andthetokencomeshere

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) { 
        try{
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET );
            // if decoded doesn't work, an error will be thrown => and it will be caught 
            console.log(decoded);
            // decoded {id: "...", iat: "...", exp: "...."}

            // req.user is undefined before i define it 
            // find the user but don't get the password! 
            req.user = await User.findById(decoded.id).select("-password"); 
            next();
        }catch(error){
            console.error(error);
            res.status(401);
            throw new Error("Not authorized , token failed!")
        }
    }

}

// admin middleware has access to anything that was saved in the protect middleware (for example req.user)
const admin = (req,res,next) => {
    console.log("ADMIN: ENTERED")
    if (req.user && req.user.isAdmin){
        next();
    }else{
        res.status(401).send("Unauthorized, sorry!")
    }
}

export {protect, admin};