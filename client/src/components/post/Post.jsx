import React from "react";

//images
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
//style
import "./post.scss";

const Post = ({ post }) => {
  return (
    <div className="post">
      <img src={post.img} alt="" className="postImg" />
      <div className="postReact">
        <img
          src={post.liked ? Heart : NotLike}
          alt=""
          className="ps-reactImg"
        />
        <img src={Comment} alt="" className="ps-reactImg" />
        <img src={Share} alt="" className="ps-reactImg" />
      </div>
      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {post.likes} likes
      </span>
      <div className="details">
        <span>
          <b>{post.name} </b>
        </span>
        <span>{post.desc}</span>
      </div>
    </div>
  );
};

export default Post;
