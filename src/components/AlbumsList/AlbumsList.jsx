import React from "react";
import AlbumsItem from "../AlbumsItem/AlbumsItem";
import Sidebar from "../Sidebar/Sidebar";
import "./AlbumsList.scss";

const AlbumsList = () => {
  return (
    <div className="content">
      <Sidebar />
      <div className="albums-list">
        <h1 className="title">Albums</h1>
        <ul className="music-list">
          <AlbumsItem />
        </ul>
      </div>
    </div>
  );
};

export default AlbumsList;
