import React from "react";
import PlayListItem from "../PlayListItem/PlayListItem";
import "./PlayList.scss";

const PlayList = () => {
  return (
    <ul className="playlist">
      <PlayListItem />
    </ul>
  );
};

export default PlayList;
