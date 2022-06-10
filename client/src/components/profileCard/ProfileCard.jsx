import React from "react";

// IMAGES
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
//STYLE
import "./profileCard.scss";
const ProfileCard = () => {
  const profilePage = true;

  return (
    <div className="profileCard">
      <div className="profileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>
      <div className="profileName">
        <span>Maria Teresa</span>
        <span>Senior UI/UX Designer</span>
      </div>

      <div className="followStatus">
        <hr />
        <div className="fallowContainer">
          <div className="follow">
            <span>6,990</span>
            <span>Followers</span>
          </div>
          <div className="vl" />
          <div className="follow">
            <span>1</span>
            <span>Following</span>
          </div>
          {profilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {profilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
