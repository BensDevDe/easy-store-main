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
const { createTemplateController } = require('../controllers/templateController')
const { validateCredentials } = require('../middleware/requestValidator')
const { protect, admin } = require('../middleware/authMiddleware.js')
const { uploadFile } = require("../middleware/uploadFile");

router.post('/register', registerController)
router.get('/register/confirm/:confirmationCode', verifyUserController)

router.post('/login', loginController)
router.get('/logout', logoutController)

router.get('/profile/:id', getUserProfileController)

router.put('/profile/update/:id', updateUserProfileController)
router.get('/template123', (req, res)=>{
  res.send('it workd')
})

router.post('/template', createTemplateController)

router.get('/test', (req, res) =>{
  res.send('works')
})

router.put(
  '/profile/update/upload/:id',
  uploadFile.single('avatar'),
  uploadController
)

module.exports = router
