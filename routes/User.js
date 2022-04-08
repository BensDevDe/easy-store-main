const express = require('express')
const router = express.Router()

const {
  registerController,
  loginController,
  logoutController,
  verifyUserController,
  getUsersController,
  getUserProfileController,
  updateUserProfileController
} = require('../controllers/authController')
const { validateCredentials } = require('../middleware/requestValidator')
const { protect, admin } = require('../middleware/authMiddleware.js')
router.post('/register', registerController)
router.get('/register/confirm/:confirmationCode', verifyUserController)
router.post('/login', loginController)
router.get('/logout', logoutController)

router
  .route('/profile')
  .get(protect, getUserProfileController)
  .put(protect, updateUserProfileController)

module.exports = router
