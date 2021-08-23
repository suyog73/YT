import React, { useState } from "react";
import Youtube from "../apis/Youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

const App = () => {
  const [videos, setVideos] = useState([]);

  const onSearchTermSubmit = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(response);
    setVideos(response.data.items);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onSearchTermSubmit} />
      <VideoList videos={videos} />
    </div>
  );
};

export default App;
