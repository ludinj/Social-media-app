import PostModel from "../models/PostModel.js";
import mongoose from "mongoose";
import { createError } from "../utils/error.js";
import UserModel from "../models/UserModel.js";

//Create new post
export const createPost = async (req, res, next) => {
  const newPost = new PostModel(req.body);
  try {
    await newPost.save();
    res.status(200).json("Post Created");
  } catch (error) {
    next(error);
  }
};

//Get at Post

export const getPost = async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await PostModel.findById(postId);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json("Post not found");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//Delete post

export const deletePost = async (req, res) => {
  const id = req.params.id;
  try {
    await PostModel.findByIdAndDelete(id);
    res.status(200).json("Post Delete");
  } catch (error) {
    res.status(500).json(error);
  }
};

//update Post

export const updatePost = async (req, res) => {
  const postId = req.params.id;
  const userId = req.body;

  try {
    const post = await PostModel.findById(postId);

    if (post.userId === userId) {
      const updatePost = await post.updateOne({ $set: req.body });
      res.status(200).json(updatePost);
    }
   
   
 
  } catch (error) {
    res.status(500).json(error);
  }
};
