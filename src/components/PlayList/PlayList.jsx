import React from "react";
import PlayListItem from "../PlayListItem/PlayListItem";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./PlayList.scss";

const PlayList = () => {
  return (
  <div className="content">
    <Sidebar />
    <div className="title-playlist-container">
      <h1 className="title">Playlists</h1>
      <ul className="playlist">
        <PlayListItem />
      </ul>
    </div>
  </div>
  );
};

export default PlayList;
