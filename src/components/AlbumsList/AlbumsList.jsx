import React from "react";
import AlbumsItem from "../AlbumsItem/AlbumsItem";
import Sidebar from "../Sidebar/Sidebar";
import "./AlbumsList.scss";

const AlbumsList = () => {
  return (
    <ul className="music-list">
      <AlbumsItem />
    </ul>
  );
};

export default AlbumsList;
