import React from "react";
import list from "../../assets/list.json";

const PlayListItem = () => {
  const playListsItems = list.albums.items;

  const playListItem = playListsItems.map(({ name, external_urls, id }) => {
    return (
      <ul key={id} className="content">
        <li className="playlist-item">
          <a href={external_urls.spotify}>{name}</a>
        </li>
      </ul>
    );
  });
  return playListItem;
};

export default PlayListItem;
