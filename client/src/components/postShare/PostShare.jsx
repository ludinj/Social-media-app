import { useState, useRef } from "react";
//icons
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
  UilTimes,
} from "@iconscout/react-unicons";

//images
import ProfileImg from "../../img/profileImg.jpg";
//style
import "./postShare.scss";
const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const handleImgChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <div className="postShare">
      <img src={ProfileImg} alt="" className="ps-image" />
      <div className="ps-input">
        <input type="text" placeholder="What's happening" name="psInput" />
        <div className="ps-options">
          <div
            className="option"
            style={{ color: "var(--photo" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--schedule" }}>
            <UilSchedule />
            Schedule
          </div>
          <button className="button ps-button">Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={handleImgChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={image.image} alt="" className="pv-img" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
