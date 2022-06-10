import React from "react";
//STYLE
import "./followersCard.scss";
//TEMPORARY DATA
import { Followers } from "../../TemporaryData/FollowersData";
const FollowersCard = () => {
  return (
    <div className="followersCard">
      <h3>Who is following you</h3>
      {Followers.map((follower, i) => {
        return (
          <div className="follower" key={i}>
            <div className="f-info">
              <img src={follower.img} alt="" className="f-image" />
              <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className="button fc-button">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;
