import React, { useState } from "react";

//images
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
//icons
import { UilSetting } from "@iconscout/react-unicons";
//style
import "./rightSide.scss";
import TrendCard from "../trendCard/TrendCard";
import ShareModal from "../shareModal/ShareModal";
const RightSide = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="rightSide">
      <div className="navIcons">
        <img src={Home} alt="" className="navIcon" />
        <UilSetting />
        <img src={Noti} alt="" className="navIcon" />
        <img src={Comment} alt="" className="navIcon" />
      </div>

      <TrendCard />
      <button className="button r-button" onClick={() => setModalOpen(true)}>
        Share
      </button>
      <ShareModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
};

export default RightSide;
