import React from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import "./profileModel.scss";
const ProfileModel = ({ modalOpen, setModalOpen }) => {
  const theme = useMantineTheme();
  return (
    <Modal
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={modalOpen}
      size="50%"
      onClose={() => setModalOpen(false)}
    >
      <form className="infoForm">
        <h3>Your info</h3>
        <div className="infoInput">
          <input
            type="text"
            name="firstName"
            className="Input"
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName"
            className="Input"
            placeholder="Last Name"
          />
        </div>
        <div className="infoInput">
          <input
            type="text"
            name="worksAt"
            className="Input"
            placeholder="Works At"
          />
        </div>
        <div className="infoInput">
          <input
            type="text"
            name="LivesIn"
            className="Input"
            placeholder="Lives In"
          />
          <input
            type="text"
            name="Country"
            className="Input"
            placeholder="Country"
          />
        </div>
        <div className="infoInput">
          <input
            type="text"
            name="RelationshipStatus"
            className="Input"
            placeholder="Relationship Status"
          />
        </div>
        <div className="infoInput">
          Profile Image
          <input type="file" name="profileImage" />
          Cover Image
          <input type="file" name="coverImage" />
        </div>
        <button className="button">Update</button>
      </form>
    </Modal>
  );
};

export default ProfileModel;
