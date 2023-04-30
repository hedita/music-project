import React from "react";
import "./PlayLists.scss";
import Sidebar from "../../components/Sidebar/Sidebar";

const PlayLists = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="playlist">
      <h2 className="playlist-title">Playlist</h2>
      <div className="content">
        <ul>
          <li className="playlist-item">1</li>
          <li className="playlist-item">1</li>
          <li className="playlist-item">1</li>
          <li className="playlist-item">1</li>
          <li className="playlist-item">1</li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default PlayLists;
