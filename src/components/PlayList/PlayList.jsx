import React from "react";
import PlayListItem from "../PlayListItem/PlayListItem";
import Sidebar from "../../components/Sidebar/Sidebar";

const PlayList = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <h2 className="playlist-title">Playlist</h2>
      <PlayListItem />;
    </div>
  );
};

export default PlayList;
