// Widget.js
import React, { useState } from "react";
import { SaveSmile } from "../icons/save-smile";
import CostumPlayer from "./CostumPlayer";
import VideoPlayer from "./VideoPlayer";
const Widget = () => {
  const [isCostumePlayerShowed, setIsCostumePlayerShowed] = useState(false);
  console.log(window.VIDEOASK_EMBED_CONFIG.url);
  const options = window.VIDEOASK_EMBED_CONFIG;
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
              url={options?.url}
              key="first"
              closePlayer={() => setIsCostumePlayerShowed(false)}
            />
          ) : (
            <VideoPlayer
              url={options?.url}
              key="second"
              setIsCostumePlayerShowed={() => setIsCostumePlayerShowed(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Widget;
