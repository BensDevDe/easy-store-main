const bcrypt = require('bcrypt')
const UserModel = require('../models/UserModel')
const jwt = require('jsonwebtoken')

const getToken = require('../helpers/jwt')
const sendEmail = require('../config/sendEmail')

//REGISTER
exports.registerController = async (req, res) => {
  const {
    firstName,
    lastName,
    street,
    city,
    postcode,
    country,
    email,
    avatar,
    password,
    role,
  } = req.body

  try {
    //encrypt the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    //store the new user
    const token = jwt.sign(
      { email: req.body.email },
      process.env.ACCESS_TOKEN_SECRET
    )

    const newUser = {
      name: {
        firstName,
        lastName,
      },
      address: {
        city,
        postcode,
        street,
        country,
      },

      email,
      avatar,
      password: hashedPassword,
      role,
      confirmationCode: token,
    }

    const createdUser = await UserModel.create(newUser)
    //send verify-email
    const sent = await sendEmail(firstName, lastName, email, token)

    res.status(201).json(sent, createdUser, {
      msg: 'User was registered successfully! Please check your emails',
    })
  } catch (error) {
    console.log(error)
  }
}

//VERIFY EMAIL
exports.verifyUserController = async (req, res) => {
  try {
    const verifyUser = await UserModel.findOne({
      confirmationCode: req.params.confirmationCode,
    })

    if (!verifyUser) {
      return res.status(404).send({ message: 'User Not found.' })
    }
    verifyUser.status = 'Active'

    verifyUser.save()

    return res
      .status(200)
      .send({ msg: 'Account successfully verified. You can login right now!' })
  } catch (error) {
    console.log(error)
    res.status(400).json(error.message)
  }
}

//LOGIN
exports.loginController = async (req, res) => {
  const { email, password } = req.body
  try {
    const db_user = await UserModel.findOne({ email })
    if (!db_user) {
      return res
        .status(404)
        .json({ errMsg: 'Account not found, please register' })
    }
    if (db_user.status != 'Active') {
      return res.status(401).send({
        message: 'Pending Account. Please Verify Your Email!',
      })
    }
    console.log(UserModel)
    const validUser = await UserModel.comparePass(password, db_user.password)
    if (!validUser) {
      return res.status(500).json({ msg: 'password incorrect' })
    }

    const token = await getToken(db_user)
    console.log(token)

    return res
      .status(200)
      .cookie('authenticated_token', token, { httpOnly: true, secure: true })
      .json({ msg: ' user logged in successfully', db_user })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

//LOGOUT
exports.logoutController = (req, res) => {
  res
    .clearCookie('authenticated_token', 'CookieConsent')
    .json({ msg: 'logged out successfully!' })
}

// GET USER PROFIL

exports.getUserProfileController = async (req, res) => {
  const user = await UserModel.findById(req.user._id)
  if (db_user) {
    res.json({
      firstName: user.name.firstName,
      lastName: user.name.firstName,
      street: user.address.street,
      city: user.address.city,
      postcode: user.address.postcode,
      country: user.address.country,
      email: user.email,
      avatar: user.avatar,
      role: user.role,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
}

exports.getUsersController = async (req, res) => {
  const users = await UserModel.find({})
  res.json(users)
}

exports.updateUserProfileController = async (req, res) => {
  const user = await UserModel.findById(req.user._id)

  if (user) {
    user.name.firstName = req.body.firstName || user.name.firstName
    user.name.lastName = req.body.lastName || user.name.lastName
    user.email = req.body.email || user.email
    user.address.street = req.body.street || user.address.street
    user.address.city = req.body.city || user.address.city
    user.address.postcode = req.body.postcode || user.address.postcode
    user.address.country = req.body.country || user.address.country
    user.avatar = req.body.avatar || user.avatar

    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()

    res.json({
      firstName: user.name.firstName,
      lastName: user.name.firstName,
      email: user.email,
      street: user.address.street,
      city: user.address.city,
      postcode: user.address.postcode,
      country: user.address.country,
      avatar: user.avatar,
      role: user.role,
      token: getToken(updatedUser._id),
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
}
