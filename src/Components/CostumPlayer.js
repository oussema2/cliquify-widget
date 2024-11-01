import React from "react";
import { motion } from "framer-motion";
import { Close } from "../icons/close";

const CostumPlayer = ({ closePlayer, url }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }} // Start 50px below and transparent
      animate={{ y: 0, opacity: 1 }} // Slide to its position and become opaque
      transition={{ duration: 0.5 }} // Animation duration
      style={{
        position: "relative",
        // overflow: "hidden",
      }}
    >
      <div
        onClick={() => closePlayer()}
        style={{
          position: "absolute",
          padding: "16px",
          borderRadius: "999px",
          backgroundColor: "black",
          right: -16,
          top: -16,
          zIndex: 999,
          cursor: "pointer",
        }}
      >
        <Close />
      </div>{" "}
      <div
        style={{
          width: "350px",
          height: "550px",
          border: "5px solid rgb(0, 51, 255)",
          borderRadius: "16px",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        {" "}
        <video
          style={{
            width: "105%",
            height: "105%",
            objectFit: "cover",
            borderRadius: "15px",
          }}
          autoPlay
          loop
          playsInline
          muted={false}
          //   controls
          src="-En42PTGEzpgasK39_-KwWPpglc2TwFsFm9TKgHjUk6LaF4fGbfRJ2VUnKKYjYUcQ5viH8MYTUoNF_6CBsjuT-3Jhvd8047GsWXGtiwJWiqQXuGqJYw_XZWwlpyvy04YdHao0ddZH7gNb_pdQ0WegTQ5AbT6IW54sJt8Cwhr-v_JEnjok3s7Y4hjFFGH_jmCpQWiSpb5Tu2aQrkV0_EcZPs"
        />
      </div>
    </motion.div>
  );
};

export default CostumPlayer;
