import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Arrow } from "../icons/arrows";
import { Dash } from "../icons/dash";
const MiniStoryPlayer = ({
  setIsCostumePlayerShowed,
  videos,
  handleNext,
  handlePrev,
  currentIndex,
}) => {
  const [videoWidth, setvideoWidth] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    if (videoRefs.current && videoRefs.current[0]) {
      setvideoWidth(videoRefs.current[0].offsetWidth);
    }
  }, []);
  const handleVideoEnded = () => {
    if (currentIndex < videos.length - 1) {
      handleNext();
    } // Automatically go to the next video
  };
  useEffect(() => {
    // Play the current video when the index changes
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      currentVideo.play();
    }

    // Pause all other videos
    videoRefs.current.forEach((video, index) => {
      if (video && index !== currentIndex) {
        video.pause();
        video.currentTime = 0; // Reset video time
      }
    });
  }, [currentIndex]);
  return (
    <div
      onClick={() => setIsCostumePlayerShowed()}
      style={{
        width: "250px",
        height: "400px",
        border: "5px solid rgb(0, 51, 255)",
        borderRadius: "15px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        style={{
          position: "absolute",
          cursor: "pointer",
          padding: "8px",
          left: 10,
          zIndex: 100,
          top: "50%",
          borderRadius: 999999,
          backgroundColor: "white",
        }}
      >
        <Arrow />
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        style={{
          position: "absolute",
          padding: "8px",
          right: 10,
          zIndex: 100,
          cursor: "pointer",
          top: "50%",
          borderRadius: 999999,
          backgroundColor: "white",
        }}
      >
        <Arrow rotation={180} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "40px",
          height: "20px",
          backgroundColor: "rgb(0, 51, 255)",
          position: "absolute",
          top: "16px",
          right: "16px",
          borderRadius: "4px",
          zIndex: 90,
        }}
      >
        <Dash />
      </div>{" "}
      <div
        style={{
          width: "100%", // Width of each story video
          height: "100%", // Height of each story video
          overflow: "hidden",
          position: "relative",
        }}
      >
        <motion.div
          style={{
            display: "flex",
            cursor: "nwse-resize",
            width: "100%", // Width of each story video
            height: "100%", // Height of each story video
            alignItems: "center",
          }}
          initial={{ x: 0 }}
          animate={{
            x: -currentIndex * videoWidth, // Adjust based on video width
          }}
          transition={{
            stiffness: 100,
            duration: 0.6,
          }}
        >
          {videos.map((src, index) => (
            <motion.video
              onEnded={handleVideoEnded} // Trigger next video when this one ends
              key={index}
              ref={(el) => (videoRefs.current[index] = el)} // Store the video reference
              src={src.source}
              playsInline
              autoPlay
              muted={true}
              style={{
                maxHeight: "110%",
                minHeight: "110%",
                minWidth: "110%",
                width: "110%", // Width of each video
                // height: "110%", // Height of each video
                borderRadius: "16px",
                objectFit: "cover",
              }}
              initial={{ opacity: 0.8 }}
              animate={{ opacity: currentIndex === index ? 1 : 0.6 }}
            />
          ))}
        </motion.div>
      </div>
      {/* <video
          style={{
            width: "110%",
            height: "110%",
            objectFit: "cover",
            borderRadius: "15px",
          }}
          autoPlay
          loop
          playsInline
          muted={true}
          src={url}
        /> */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "calc(50% - 50px)",
          width: "100px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ fontSize: "18px", color: "white", fontWeight: "bold" }}>
          Hello
        </p>
      </div>
    </div>
  );
};

export default MiniStoryPlayer;
