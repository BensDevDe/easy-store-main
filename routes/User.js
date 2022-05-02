const express = require('express')
const router = express.Router()

const {
  registerController,
  loginController,
  logoutController,
  verifyUserController,
  getUserProfileController,
  updateUserProfileController,
  uploadController,
} = require('../controllers/authController')
const { validateCredentials } = require('../middleware/requestValidator')
const { protect, admin } = require('../middleware/authMiddleware.js')
const { uploadFile } = require('../middleware/uploadFile')

router.post('/register', validateCredentials, registerController)
router.get('/register/confirm/:confirmationCode', verifyUserController)

router.post('/login', loginController)
router.get('/logout', logoutController)
router.get('/profile/:id', getUserProfileController)
router.put('/profile/update/:id', updateUserProfileController)

router.put(
  '/profile/uploadAvatar/:id',
  uploadFile.single('file'),
  uploadController
)

module.exports = router
