import React from "react";
import Post from "../posts/Posts";
import PostShare from "../postShare/PostShare";
import "./postSide.scss";
const PostSide = () => {
  return (
    <div className="postSide">
      <PostShare />
      <Post />
    </div>
  );
};

export default PostSide;
