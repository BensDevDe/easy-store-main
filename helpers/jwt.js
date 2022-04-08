const jwt = require("jsonwebtoken");

//  userid is the id, becasue i will use it as a payload in the token 
const getToken = (id) => {
     return jwt.sign({id}, process.env.JWT_SECRET, {
         expiresIn: "30d"
     })
 }

//  when will the token expire?
// 30d equals => 30 days

module.exports = getToken;