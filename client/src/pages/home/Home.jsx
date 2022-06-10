import React from "react";
import PostSide from "../../components/postSide.jsx/PostSide";
import ProfileSide from "../../components/profileSide/ProfileSide";
import RightSide from "../../components/rightSide/RightSide";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <ProfileSide />
      <PostSide />
      <RightSide />
    </div>
  );
};

export default Home;
