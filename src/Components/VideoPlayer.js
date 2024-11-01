import React from "react";
import { Dash } from "../icons/dash";

const VideoPlayer = ({ setIsCostumePlayerShowed }) => {
  return (
    <div
      onClick={() => setIsCostumePlayerShowed()}
      style={{
        width: "150px",
        height: "200px",
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
        }}
      >
        <Dash />
      </div>
      <video
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
        src="https://media.videoask.com/transcoded/d3a76e0e-851a-484d-96dc-988d2962fea4/embed.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6ImQzYTc2ZTBlLTg1MWEtNDg0ZC05NmRjLTk4OGQyOTYyZmVhNCIsImV4cCI6MTczMDg4MjE1OH0.fBsg1_1M_76YpOXbePD0tgZX5pC2FAtrl-22wmH-CCy8y_J32uQFZO-CYOkH5pa6V4OHXfldQ_wsi6a6gKMTmBBSIp586FRF1dO6WOd3LsUMtHVejzxGpR-6QItsTfGUCGR3BjoqCivpoqI5YZhJSxmRV0ciWHDSjXo3GSK8EiDELlo7JwZ3WKu5K8vDlVnCvB3itUJCY0uhRP0qwcNOLVQsLFruv7bVUqDzB_jcQmBkWeudRPpT1HpIbPndw4cB7_KbUVgau6EW3WVEZcHVUqI5rBekKhqglR1Gg5djIAE8OcKprG0rOZfDz-o15JvnrGWl4qu8BJ4YnlFnAT0nrGmNz6rzflPxz5IgJ8e3TeSm6W_QsbM7y9966Jl2WPcwbWCQmWf04uH0hnGag_ZUQq_B94LoSK16d_SwEXeZegwnShdKkz7rt9YNbwZUozks7p1Pp8j_xIqV_SwRSN2S-En42PTGEzpgasK39_-KwWPpglc2TwFsFm9TKgHjUk6LaF4fGbfRJ2VUnKKYjYUcQ5viH8MYTUoNF_6CBsjuT-3Jhvd8047GsWXGtiwJWiqQXuGqJYw_XZWwlpyvy04YdHao0ddZH7gNb_pdQ0WegTQ5AbT6IW54sJt8Cwhr-v_JEnjok3s7Y4hjFFGH_jmCpQWiSpb5Tu2aQrkV0_EcZPs"
      />
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
          Live Demo
        </p>
      </div>
    </div>
  );
};

export default VideoPlayer;
