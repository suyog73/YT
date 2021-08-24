import React from "react";
import "./VideoItem.css";

const VideoItem = (props) => {
  const { video, onVideoSelect } = props;

  // console.log(video);
  const onVideoClick = () => {
    onVideoSelect(video);
  };

  return (
    <div onClick={onVideoClick} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
// items[0].snippet.thumbnails.medium.url;
