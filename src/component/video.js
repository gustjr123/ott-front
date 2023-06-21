import React, { useState } from "react";

const VideoContainer = () => {
  const [videoUrl, setVideoUrl] = useState("");

  const handleUrlChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handlePlayVideo = () => {
    const video = document.getElementById("videoPlayer");
    video.src = videoUrl;
    video.load();
    video.play();
  };

  return (
    <div className="video-component">
      <div className="input-container">
        <input
          type="text"
          value={videoUrl}
          onChange={handleUrlChange}
          placeholder="영상 주소를 입력하세요"
        />
        <button onClick={handlePlayVideo}>재생</button>
      </div>

      {videoUrl && (
        <video id="videoPlayer" controls>
          <source src={videoUrl} type="application/x-mpegURL" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoContainer;
