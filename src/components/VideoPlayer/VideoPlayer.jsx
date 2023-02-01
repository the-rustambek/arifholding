import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import video from '../../assets/icons/video.mp4'
import Redirect from "../../Redirect";

const VideoPlayer = () => {
    const [showVideo, setShowVideo] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setShowVideo(false);
      }, 5000);
    }, []);

  return (
    <div>
    {showVideo && <video src={video} />}
    {!showVideo && <Redirect to="/" />}
  </div>
  );
};

export default VideoPlayer;
