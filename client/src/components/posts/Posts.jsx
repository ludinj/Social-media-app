import React from "react";
import { PostsData } from "../../TemporaryData/PostData";
//components
import Post from "../post/Post";
//style
import "./posts.scss";
const Posts = () => {
  return (
    <div className="posts">
      {PostsData.map((post, i) => {
        return <Post key={i} post={post} />;
      })}
    </div>
  );
};

export default Posts;
