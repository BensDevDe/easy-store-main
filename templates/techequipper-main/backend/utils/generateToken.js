 import jwt from "jsonwebtoken";

//  userid is the id, becasue i will use it as a payload in the token 
 const generateToken = (id) => {
     return jwt.sign({id}, process.env.JWT_SECRET, {
         expiresIn: "30d"
     })
 }

//  when will the token expire?
// 30d equals => 30 days

export default generateToken;