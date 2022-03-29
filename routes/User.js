const express = require("express");
const router = express.Router();

const {
  registerController,
  loginController,
  logoutController,
  verifyUserController,
} = require("../controllers/authController");
const { validateCredentials } = require("../middleware/requestValidator");

router.post("/register", registerController);
router.get("/register/confirm/:confirmationCode", verifyUserController);
router.post("/login", loginController);
router.get("/logout", logoutController);

module.exports = router;
