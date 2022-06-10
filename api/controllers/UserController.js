//models
import UserModel from "../models/UserModel.js";
//libraries
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";

//update user

export const updateUser = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: { ...req.body, password: hashedPassword },
      },
      { new: true }
    );
    if (updatedUser) {
      const { password, ...userInfo } = updatedUser._doc;
      res.status(200).json({ ...userInfo });
    } else {
      next(createError(404, "User not found"));
    }
  } catch (error) {
    next(error);
  }
};

//delete user

export const deleteUser = async (req, res, next) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
  } catch (error) {
    next(error);
  }
};
//get User

export const getUser = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.id);

    if (user) {
      const { password, ...userInfo } = user._doc;
      res.status(200).json({ ...userInfo });
    } else {
      next(createError(404, "User not found"));
    }
  } catch (error) {
    next(error);
  }
};
//get all users
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

// Follow a user

export const followUser = async (req, res, next) => {
  const { currentUserId } = req.body;
  const id = req.params.id;

  try {
    const userToFollow = await UserModel.findById(id);
    const followingUser = await UserModel.findById(currentUserId);

    if (!userToFollow.followers.includes(currentUserId)) {
      await userToFollow.updateOne({
        $push: {
          followers: currentUserId,
        },
      });
      await followingUser.updateOne({
        $push: {
          following: id,
        },
      });
      res.status(201).json("User Followed");
    } else {
      res.status(403).json("User Already followed by you");
    }
  } catch (error) {
    next(error);
  }
};
//UnFollow user

export const unFollowUser = async (req, res, next) => {
  const { currentUserId } = req.body;
  const id = req.params.id;

  try {
    const userToUnFollow = await UserModel.findById(id);
    const followingUser = await UserModel.findById(currentUserId);

    if (userToUnFollow.followers.includes(currentUserId)) {
      await userToUnFollow.updateOne({
        $pull: {
          followers: currentUserId,
        },
      });
      await followingUser.updateOne({
        $pull: {
          following: id,
        },
      });
      res.status(201).json("User  Unfollowed");
    } else {
      res.status(403).json("User is not followed by you");
    }
  } catch (error) {
    next(error);
  }
};
