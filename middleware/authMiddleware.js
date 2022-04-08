const UserModel = require('../models/UserModel')
const jwt = require('jsonwebtoken')


exports.protect = async (req, res, next) => {
    let token
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
      ) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

            req.user = await UserModel.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            console.error(error);
            res.status(401)
            throw new Error ('Not authorized, token failed')
        }
    } 
    if(!token){
        res.status(401)
        throw new Error('Not authorized, no token')
    }
   
  };

  exports.admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      next()
    } else {
      res.status(401)
      throw new Error('Not authorized as an admin')
    }
  }

