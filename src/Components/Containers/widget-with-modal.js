import React, { useState } from "react";
import { SaveSmile } from "../../icons/save-smile";
import ModalWidgetContent from "../modal-widget-content";
import VideoPlayer from "../video-plaer";

const WidgetWithModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  if (isModalOpen) {
    return <ModalWidgetContent closeModal={() => setIsModalOpen(false)} />;
  } else {
    return (
      <div
        style={{
          position: "fixed",
          bottom: isModalOpen ? 0 : "20px",
          right: isModalOpen ? 0 : "20px",
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
            <VideoPlayer
              key="second"
              setIsCostumePlayerShowed={() => setIsModalOpen(true)}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default WidgetWithModal;
