import React, { useState } from "react";
import Youtube from "../apis/Youtube";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoItem from "./VideoItem";
import VideoList from "./VideoList";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("");

  const onSearchTermSubmit = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });
    // console.log(response);
    setVideos(response.data.items);
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onSearchTermSubmit} />
      <VideoDetail video={selectedVideo} />
      <VideoList videos={videos} onVideoSelect={onVideoSelect} />
    </div>
  );
};

export default App;
