import React from "react";
import "./MusicList.scss";
import MusicItem from "../MusicItem/MusicItem";

const MusicList = () => {
  return (
    <ul className="music-list">
      <MusicItem />
    </ul>
  );
};

export default MusicList;
