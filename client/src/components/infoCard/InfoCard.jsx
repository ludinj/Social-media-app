import React, { useState } from "react";
//icon
import { UilPen } from "@iconscout/react-unicons";
//style
import "./infoCard.scss";
import ProfileModel from "../profileModel/ProfileModel";

const InfoCard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="infoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div className="editIcon">
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpen(true)}
          />
          <ProfileModel modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
      </div>
      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>in Relationships </span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Maracaibo</span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Naula bank</span>
      </div>
      <button className="button logout-button">Log out</button>
    </div>
  );
};

export default InfoCard;
