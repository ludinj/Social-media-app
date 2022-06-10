import express from "express";
import {
  getUser,
  updateUser,
  deleteUser,
  getAllUsers,
  followUser,
  unFollowUser,
} from "../controllers/UserController.js";

import { verifyAdmin, verifyUser, verifyToken } from "../utils/verifyToken.js";
const router = express.Router();

//Get User
router.get("/:id", verifyUser, getUser);
//Update User
router.put("/:id", verifyUser, updateUser);
//Delete User
router.delete("/:id", verifyUser, deleteUser);
//Get All Users
router.get("/", verifyAdmin, getAllUsers);
//follow user
router.put("/follow/:id", followUser);
//UnFollow user
router.put("/unfollow/:id", unFollowUser);

export default router;
