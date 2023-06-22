import React, { useState, useEffect, useRef } from "react";
import Hls from "hls.js";

const VideoContainer = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const videoRef = useRef(null);

  useEffect(() => {
    const checkVideoUrlValidity = async (url) => {
      try {
        const response = await fetch(url);
        console.log("res: ", response);
        if (response.ok) {
          loadVideo(url);
        } else {
          console.log("유효하지 않은 URL입니다.");
        }
      } catch (error) {
        console.error("요청 중 오류가 발생했습니다.", error);
      }
    };

    const loadVideo = (url) => {
      if (Hls.isSupported()) {
        const hls = new Hls();

        hls.loadSource(url);
        hls.attachMedia(videoRef.current);
      } else if (
        videoRef.current.canPlayType("application/vnd.apple.mpegurl")
      ) {
        videoRef.current.src = url;
      }
    };

    if (videoUrl) {
      checkVideoUrlValidity(videoUrl);
    }
  }, [videoUrl]);

  const handleUrlChange = (event) => {
    setVideoUrl(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={videoUrl}
        onChange={handleUrlChange}
        placeholder="영상 주소를 입력하세요"
      />
      <video ref={videoRef} width={1080} height={720} controls></video>
    </div>
  );
};

export default VideoContainer;
