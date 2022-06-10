//libraries
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//utils
import { createError } from "../utils/error.js";
//models
import UserModel from "../models/UserModel.js";

// User Registration
export const registerUser = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);

  const newUser = new UserModel({ ...req.body, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//User Login

export const loginUser = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({
      username: req.body.username,
    });

    if (!user) return next(createError(404, "User not found"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect)
      return res.status(500).send("Wrong password or username!");

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );
    const { password, isAdmin, ...userInfo } = user._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(201)
      .json({ details: { ...userInfo }, isAdmin });
  } catch (error) {
    res.status(500).json(error);
  }
};
