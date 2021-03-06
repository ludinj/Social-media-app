import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
      dropDups: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      dropDups: true,
    },
    password: {
      type: String,
      require: true,
    },
    firstname: {
      type: String,
      require: true,
    },
    lastname: {
      type: String,
      require: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },

    profilePicture: String,
    coverPicture: String,
    about: String,
    livesIn: String,
    worksAt: String,
    relationshipStatus: String,
    followers: [],
    following: [],
  },
  { timestamps: true }
);

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
