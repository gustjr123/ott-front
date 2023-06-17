import React, { useState } from "react";
import "./VideoComponent.css"; // CSS 파일 임포트

const VideoComponent = () => {
  const [videoUrl, setVideoUrl] = useState("");

  const handleVideoUrlChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleVideoSubmit = () => {
    // 동영상을 재생할 수 있는 페이지로 이동하거나, video 태그를 사용하여 동영상을 재생합니다.
    // 예시로는 YouTube 링크를 사용합니다. 실제로는 동영상을 재생할 수 있는 서비스의 도메인을 사용해야 합니다.
    const videoId = extractVideoId(videoUrl);
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;

    // 동영상을 재생하기 위한 iframe 요소를 생성합니다.
    const videoElement = document.createElement("iframe");
    videoElement.src = videoSrc;
    videoElement.width = "560";
    videoElement.height = "315";
    videoElement.allowFullscreen = true;

    // 동영상을 보여줄 영역의 ID를 가진 엘리먼트를 찾고, 해당 영역에 동영상을 추가합니다.
    const videoContainer = document.getElementById("videoContainer");
    videoContainer.innerHTML = "";
    videoContainer.appendChild(videoElement);
  };

  // YouTube 동영상 링크에서 동영상 ID를 추출하는 유틸리티 함수
  const extractVideoId = (url) => {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([^\s]+)/;
    const match = url.match(regExp);
    return match && match[1];
  };

  return (
    <div className="video-component">
      <div className="input-container">
        <input type="text" value={videoUrl} onChange={handleVideoUrlChange} />
        <button onClick={handleVideoSubmit}>OK</button>
      </div>
      <div id="videoContainer"></div>
    </div>
  );
};

export default VideoComponent;
