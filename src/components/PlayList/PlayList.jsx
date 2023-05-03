import React from "react";
import PlayListItem from "../PlayListItem/PlayListItem";
import "./PlayList.scss";
import playlists from "../../assets/Playlists.json";

const PlayList = () => {
  return (
    <ul className="playlist">
      {playlists.playlists.items.map(({ external_urls, id, name }) => {
        return <PlayListItem key={id} external_urls={external_urls} name={name} />;
      })}
    </ul>
  );
};

export default PlayList;
