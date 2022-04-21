import express from "express";
const router = express.Router();
import {authUser, deleteUser, getUserProfile, getUsers, registerUser, updateUserProfile,  getUserById, updateUser} from "../controllers/userController.js";
import {protect, admin} from "../middleware/authMiddleware.js"


/* 

ROUTE: api/users

*/
router.post("/login", authUser);

router.get("/profile", protect, getUserProfile );

router.post("/", registerUser);

router.put("/profile", protect, updateUserProfile);

// admin is based ONLY on Admin Users
router.get("/", protect, admin, getUsers)

router.delete("/:id", protect, admin, deleteUser);

router.get("/:id", protect, admin, getUserById);

router.put("/:id", protect, admin, updateUser);
export default router; 

// when it has protect they need a TOKEN!