const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')
const requiredString = { type: String, required: true }

const userSchema = new Schema({
  name: {
    firstName: requiredString,
    lastName: requiredString,
  },
  address: {
    street: requiredString,
    city: requiredString,
    postcode: requiredString,
    country: requiredString,
  },

  email: { type: String, lowercase: true, required: true },
  avatar: { type: String, default: "dummy-profile-pic.png" },
  password: requiredString,
  role: {
    type: String,
    default: 'basic',
    enum: ['basic', 'admin'],
  },
  status: {
    type: String,
    enum: ['Pending', 'Active'],
    default: 'Pending',
  },
  confirmationCode: {
    type: String,
    unique: true,
  },
}, {timestamps: true})
const UserModel = model('User', userSchema)

UserModel.comparePass = async function (givenPassword, userPassword) {
  const validPassword = await bcrypt.compare(givenPassword, userPassword)
  return validPassword
}

module.exports = UserModel
