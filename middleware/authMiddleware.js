
const jwt = require('jsonwebtoken')

exports.protect = (req, res, next) => {
  
  const token = req.cookies.authenticated_token
  if (!token) {
    return res
      .status(403)
      .json({ errMsg: 'you are a not valid user, please login!' })
  }

  const decodedUser = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
  req.decodedUser = decodedUser

  next()
}
