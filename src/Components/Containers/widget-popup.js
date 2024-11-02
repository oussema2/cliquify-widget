import React, { useState } from "react";
import { SaveSmile } from "../../icons/save-smile";
import ModalVideo from "../modal-video";
import VideoPlayer from "../video-plaer";
import CostumPlayer from "../costum-player";

const WidgetPopUp = ({ options }) => {
  const [isCostumePlayerShowed, setIsCostumePlayerShowed] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "1000",
      }}
    >
      <div style={{ position: "relative", width: "50px", height: "50px" }}>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "24px",
            height: "24px",
            padding: "16px",
            borderRadius: "9999px",
            backgroundColor: "rgb(0, 51, 255)",
            zIndex: 9999,
          }}
        >
          {" "}
          <SaveSmile />
        </div>
        <div style={{ position: "absolute", bottom: "16px", right: "16px" }}>
          {isCostumePlayerShowed ? (
            <CostumPlayer
              key="first"
              closePlayer={() => setIsCostumePlayerShowed(false)}
            />
          ) : (
            <VideoPlayer
              text={options.title}
              url={options.videoUrl}
              key="second"
              setIsCostumePlayerShowed={() => setIsCostumePlayerShowed(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default WidgetPopUp;
