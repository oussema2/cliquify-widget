import React, { useState } from "react";
import { Close } from "../icons/close";

const ModalWidgetContent = ({ closeModal }) => {
  const [showInnerModal, setShowInnerModal] = useState(false);
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: "80",
      }}
    >
      {showInnerModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(10,25,0,0.5)",
            zIndex: "90",
          }}
        >
          <div
            style={{
              width: "250px",
              height: "400px",
              backgroundColor: "white",
              position: "absolute",
              top: "calc(50% - 200px)",
              left: "calc(50% - 125px)",
            }}
          >
            <video
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              autoPlay
              loop
              playsInline
              muted={true}
              src="https://media.videoask.com/transcoded/d3a76e0e-851a-484d-96dc-988d2962fea4/embed.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6ImQzYTc2ZTBlLTg1MWEtNDg0ZC05NmRjLTk4OGQyOTYyZmVhNCIsImV4cCI6MTczMDg4MjE1OH0.fBsg1_1M_76YpOXbePD0tgZX5pC2FAtrl-22wmH-CCy8y_J32uQFZO-CYOkH5pa6V4OHXfldQ_wsi6a6gKMTmBBSIp586FRF1dO6WOd3LsUMtHVejzxGpR-6QItsTfGUCGR3BjoqCivpoqI5YZhJSxmRV0ciWHDSjXo3GSK8EiDELlo7JwZ3WKu5K8vDlVnCvB3itUJCY0uhRP0qwcNOLVQsLFruv7bVUqDzB_jcQmBkWeudRPpT1HpIbPndw4cB7_KbUVgau6EW3WVEZcHVUqI5rBekKhqglR1Gg5djIAE8OcKprG0rOZfDz-o15JvnrGWl4qu8BJ4YnlFnAT0nrGmNz6rzflPxz5IgJ8e3TeSm6W_QsbM7y9966Jl2WPcwbWCQmWf04uH0hnGag_ZUQq_B94LoSK16d_SwEXeZegwnShdKkz7rt9YNbwZUozks7p1Pp8j_xIqV_SwRSN2S-En42PTGEzpgasK39_-KwWPpglc2TwFsFm9TKgHjUk6LaF4fGbfRJ2VUnKKYjYUcQ5viH8MYTUoNF_6CBsjuT-3Jhvd8047GsWXGtiwJWiqQXuGqJYw_XZWwlpyvy04YdHao0ddZH7gNb_pdQ0WegTQ5AbT6IW54sJt8Cwhr-v_JEnjok3s7Y4hjFFGH_jmCpQWiSpb5Tu2aQrkV0_EcZPs"
            />
            <div
              onClick={() => setShowInnerModal(false)}
              style={{
                position: "absolute",
                padding: "8px",
                borderRadius: "999px",
                backgroundColor: "white",
                right: -46,
                top: 0,
                zIndex: 80,
                cursor: "pointer",
              }}
            >
              <Close fill={"black"} />
            </div>{" "}
          </div>
        </div>
      )}
      <div
        style={{
          width: "80%",
          height: "90%",
          backgroundColor: "white",
          position: "absolute",
          top: "5%",
          left: "10%",
        }}
      >
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          {" "}
          <div
            onClick={() => closeModal()}
            style={{
              position: "absolute",
              padding: "8px",
              borderRadius: "999px",
              backgroundColor: "white",
              left: -46,
              top: 0,
              zIndex: 80,
              cursor: "pointer",
            }}
          >
            <Close fill={"black"} />
          </div>{" "}
          <button onClick={() => setShowInnerModal(true)}>Open Video</button>
        </div>
      </div>
    </div>
  );
};

export default ModalWidgetContent;
