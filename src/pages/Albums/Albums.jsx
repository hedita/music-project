import React from "react";
import "./Albums.scss";
import Sidebar from "../../components/Sidebar/Sidebar";

const Albums = () => {
  return (
    <div className="content">
      <Sidebar />
      <div className="albums-list">
        <h1 className="title">Albums</h1>
        <ul className="music-list">
          <li>music</li>
          <li>music</li>
          <li>music</li>
          <li>music</li>
          <li>music</li>
          <li>music</li>
          <li>music</li>
          <li>music</li>
          <li>music</li>
          <li>music</li>
        </ul>
      </div>
    </div>
  );
};

export default Albums;
