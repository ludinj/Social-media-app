import express from "express";
import {
  createPost,
  getPost,
  deletePost,
  updatePost,
} from "../controllers/PostController.js";
const router = express.Router();

router.post("/", createPost);
router.get("/:id", getPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);
export default router;
