import React, { useState } from "react";
import { SaveSmile } from "../../icons/save-smile";
import MiniStoryPlayer from "../mini-story-player";
import XlStoryPlayer from "../xl-story-player";

const videos = [
  "https://library.jobpixel.com/0e/2b/0e2bc621-6850-4ea0-a4eb-8b10d98ffbc3-preview.mp4?Expires=1730753494&Signature=U~f4ZqDVFzfgULf5d7bRBsnVISDOcxE~-ozRjDStuqdh00hePI4kVoGlb~Qim1ZNLXxdqlDgSobpkxMhZ4tH3lQKQq~CRrnP-iwLd7SCq9oPlGEeqa0L4AYkOUJr2-eyzq8nXniApPPeLtqdAvd2DQXUxA4W1OsiiNacy5MTya~vH~Im00koY5RyHnf~kfiaQZq6lBD4VSRjaCGYhWBamssEMpxItaYNbQniPgxOQCidxsuHppwn3ogrKEjJTmlxx5qphSNvcVsD3eWShQFTAPqxEw69aDZWLvO4GPgrK7gTtxhm~2CUf3o6qh-nzepGKZvztJgstVrjeMs-LZH9Ng__&Key-Pair-Id=K17NSBARH4W4OV",
  "https://library.jobpixel.com/b3/da/b3da8154-f337-4615-a6c6-043d730f3b34-preview.mp4?Expires=1730693364&Signature=CpqMbmME70T0UQe-gy2YK5ksLixR536WWmd5pjER9jArH20CnEfHCQRWhcTgphSbqcZU2X9uWwOUQR~C3txhn-sPT6ZfWnUKH~k9yBraiIRQcJkoccQ~U5EQy6gTUWeIESKP7mNQqbVgjWKCuqnOLH0YEmF8yx7XX25Xzjdxves1n9QMceupLKfmdA40Ao6T3Z~bFJB7MKnfaNZ4CUSQtC5nn2Zhq8EMSr5jrkkvjkfxZmy3yG-xQ1ccAa-7JtTK7Wj~0N-oxGbOOvZVsxT6lPiunoEKXQAaJKaYPF2Ru4ElVvajbuzsq-BRNfqAOY5ftgW9hdMHuG0YouLUaaOlNQ__&Key-Pair-Id=K17NSBARH4W4OV",
  "https://library.jobpixel.com/b7/dd/b7ddd87a-c518-4dcc-bc24-00c20730ced2-preview.mp4?Expires=1730693364&Signature=L0PotQSz6uQ65niVVCSMG7y5JMDLGmioMmiRhFhO9EQN-ubBHpN7MR47T23~EaCTmaQlxJ9pSYdY-zp7gJDV2MTjH-l5givDRF9bIFz73GJX0D54eFcfEzjRpylvlR-QieIe~nubxxuOriTjNZrhzoQ4mCOdb-Boj3rCzl08o4~nE-LG26vXEMz-pUQK~klMYLSKWM1VpbN81LIvRDEsAVpyBCzp7dMLtMO8xQs5ex5-a-qsT3LJnRm1PZ0I7jR-GQvzlwbtsJHMXSTeBNKdC6WcupxGYdsLbarifoWzUWj0qyiR~Zhl8pRz2mg23TNyHJElPVfOC~xiLtr3DZfM-g__&Key-Pair-Id=K17NSBARH4W4OV",
  "https://library.jobpixel.com/ac/5a/ac5abda9-d030-4515-b995-a5bd03e106f1-preview.mp4?Expires=1730753494&Signature=iM7l5lpQUoxKDTsMhBGKVFIA4UZfqDN42hDpANRm5~ItEDsIZZJjy734m2WzLa-nBD7hEzBBJL9zJI9fNaLtNen~WetliKBNmO~tZ4m5f4OMmGeOKAlcuwShx5A8UrxxUgxaPU2iN4pCPnBjAWvULB0IsaQkdylUswcHO5ofBprjc124DU7-TgsDy8vkrZCBP-7A1QTTwpI4ZmbHmMFBAQiY2-~yny01e36lJPOxZTOihXB8wmTCh~6Zt3-wPkftxP50YwY~R1DAFI7TNtP8ydnWOYQsm3MEpAFSfk0muB0CNIMAAnDRRF7jWLub9eQ4-gTcv7sTQ2SP8hJ5zdzucQ__&Key-Pair-Id=K17NSBARH4W4OV",
];

const WidgetStory = () => {
  const [isCostumePlayerShowed, setIsCostumePlayerShowed] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    if (currentIndex !== videos.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

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
            <XlStoryPlayer
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              handleNext={handleNext}
              handlePrev={handlePrev}
              videos={videos}
              closeModal={() => setIsCostumePlayerShowed(false)}
              key="first"
              closePlayer={() => setIsCostumePlayerShowed(false)}
            />
          ) : (
            <MiniStoryPlayer
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              handleNext={handleNext}
              handlePrev={handlePrev}
              videos={videos}
              key="second"
              setIsCostumePlayerShowed={() => setIsCostumePlayerShowed(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default WidgetStory;
