import React from "react";
import ReactPlayer from "react-player/youtube";
import "./video.css";

function Video() {
  return (
    <div id="roccomovie">
      <ReactPlayer url="https://www.youtube.com/embed/2fkx7hEIiiI" controls />
    </div>
  );
}

export default Video;
