import React from "react";
import playlists from "../../assets/Playlists.json"
import "./PlayListItem.scss";

const PlayListItem = () => {
  const playListsItems = playlists.playlists.items;

  const playListItem = playListsItems.map(({ external_urls, id, name }) => {
    return (
      <li key={id}>
        <a href={external_urls.spotify} className="playlist-item">{name}</a>
      </li>
    );
  });
  return playListItem;
};

export default PlayListItem;
