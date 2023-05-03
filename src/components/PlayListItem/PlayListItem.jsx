import React from "react";
import "./PlayListItem.scss";

const PlayListItem = ({ external_urls, name }) => {
  return (
    <li>
      <a href={external_urls.spotify} className="playlist-item">
        {name}
      </a>
    </li>
  );
};

export default PlayListItem;
