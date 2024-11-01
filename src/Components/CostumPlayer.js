import React from "react";
import { motion } from "framer-motion";
import { Close } from "../icons/close";

const CostumPlayer = ({ closePlayer }) => {
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
          src="https://media.videoask.com/transcoded/d3a76e0e-851a-484d-96dc-988d2962fea4/embed.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6ImQzYTc2ZTBlLTg1MWEtNDg0ZC05NmRjLTk4OGQyOTYyZmVhNCIsImV4cCI6MTczMDg4MjE1OH0.fBsg1_1M_76YpOXbePD0tgZX5pC2FAtrl-22wmH-CCy8y_J32uQFZO-CYOkH5pa6V4OHXfldQ_wsi6a6gKMTmBBSIp586FRF1dO6WOd3LsUMtHVejzxGpR-6QItsTfGUCGR3BjoqCivpoqI5YZhJSxmRV0ciWHDSjXo3GSK8EiDELlo7JwZ3WKu5K8vDlVnCvB3itUJCY0uhRP0qwcNOLVQsLFruv7bVUqDzB_jcQmBkWeudRPpT1HpIbPndw4cB7_KbUVgau6EW3WVEZcHVUqI5rBekKhqglR1Gg5djIAE8OcKprG0rOZfDz-o15JvnrGWl4qu8BJ4YnlFnAT0nrGmNz6rzflPxz5IgJ8e3TeSm6W_QsbM7y9966Jl2WPcwbWCQmWf04uH0hnGag_ZUQq_B94LoSK16d_SwEXeZegwnShdKkz7rt9YNbwZUozks7p1Pp8j_xIqV_SwRSN2S-En42PTGEzpgasK39_-KwWPpglc2TwFsFm9TKgHjUk6LaF4fGbfRJ2VUnKKYjYUcQ5viH8MYTUoNF_6CBsjuT-3Jhvd8047GsWXGtiwJWiqQXuGqJYw_XZWwlpyvy04YdHao0ddZH7gNb_pdQ0WegTQ5AbT6IW54sJt8Cwhr-v_JEnjok3s7Y4hjFFGH_jmCpQWiSpb5Tu2aQrkV0_EcZPs"
        />
      </div>
    </motion.div>
  );
};

export default CostumPlayer;
